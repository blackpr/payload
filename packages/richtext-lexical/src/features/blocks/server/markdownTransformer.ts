/* eslint-disable */
import { $convertFromMarkdownString, $convertToMarkdownString } from '@lexical/markdown'
import { Block } from 'payload'
import { $createServerBlockNode, $isServerBlockNode, ServerBlockNode } from './nodes/BlocksNode.js'
import type { Transformer } from '@lexical/markdown'

import { propsToJSXString } from '../../../utilities/jsx/jsx.js'

import { createHeadlessEditor } from '@lexical/headless'
import { getEnabledNodesFromServerNodes } from '../../../lexical/nodes/index.js'
import { NodeWithHooks } from '../../typesServer.js'
import { SerializedEditorState } from 'lexical'
import { extractPropsFromJSXPropsString } from '../../../utilities/jsx/extractPropsFromJSXPropsString.js'
import type { MultilineElementTransformer } from '../../../utilities/jsx/lexicalMarkdownCopy.js'
import { linesFromStartToContentAndPropsString } from './linesFromMatchToContentAndPropsString.js'

function createTagRegexes(tagName: string) {
  const escapedTagName = tagName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

  // Regex components
  const openingTag = `<${escapedTagName}`
  const closingTag = `</${escapedTagName}`
  const optionalWhitespace = `\\s*`
  const mandatoryClosingBracket = `>`

  // Assembled regex patterns
  const startPattern = `${openingTag}(?=\\s|>|$)` // Only match the tag name
  const endPattern = `${closingTag}${optionalWhitespace}${mandatoryClosingBracket}`

  return {
    regExpStart: new RegExp(startPattern, 'i'),
    regExpEnd: new RegExp(endPattern, 'i'),
  }
}
export const getBlockMarkdownTransformers = ({
  blocks,
}: {
  blocks: Block[]
}): ((props: {
  allNodes: Array<NodeWithHooks>
  allTransformers: Transformer[]
}) => MultilineElementTransformer)[] => {
  if (!blocks?.length) {
    return
  }

  const transformers: ((props: {
    allNodes: Array<NodeWithHooks>
    allTransformers: Transformer[]
  }) => MultilineElementTransformer)[] = []

  for (const block of blocks) {
    if (!block.jsx) {
      continue
    }
    const regex = createTagRegexes(block.slug)

    transformers.push(({ allTransformers, allNodes }) => ({
      dependencies: [ServerBlockNode],
      export: (node) => {
        if (!$isServerBlockNode(node)) {
          return null
        }
        if (node.getFields()?.blockType?.toLowerCase() !== block.slug.toLowerCase()) {
          return null
        }

        const nodeFields = node.getFields()
        const lexicalToMarkdown = getLexicalToMarkdown(allNodes, allTransformers)

        const exportResult = block.jsx.export({
          fields: nodeFields,
          lexicalToMarkdown,
        })
        if (exportResult === false) {
          return null
        }
        if (typeof exportResult === 'string') {
          return exportResult
        }

        if (exportResult?.children?.length) {
          return `<${nodeFields.blockType} ${propsToJSXString({ props: exportResult.props })}>\n  ${exportResult.children}\n</${nodeFields.blockType}>`
        }

        return `<${nodeFields.blockType} ${propsToJSXString({ props: exportResult.props })}/>`
      },
      regExpEnd: block.jsx?.customEndRegex ?? regex.regExpEnd,
      regExpStart: block.jsx?.customStartRegex ?? regex.regExpStart,
      handleImportAfterStartMatch: block.jsx?.customEndRegex
        ? undefined
        : ({ startLineIndex, lines, transformer, rootNode, startMatch }) => {
            const regexpEndRegex: RegExp | undefined =
              typeof transformer.regExpEnd === 'object' && 'regExp' in transformer.regExpEnd
                ? transformer.regExpEnd.regExp
                : transformer.regExpEnd

            const isEndOptional =
              transformer.regExpEnd &&
              typeof transformer.regExpEnd === 'object' &&
              'optional' in transformer.regExpEnd
                ? transformer.regExpEnd.optional
                : !transformer.regExpEnd

            const linesLength = lines.length

            const { propsString, content, endLineIndex } = linesFromStartToContentAndPropsString({
              startMatch,
              regexpEndRegex,
              startLineIndex,
              linesLength,
              lines,
              endLineIndex: startLineIndex,
              isEndOptional,
            })

            if (block.jsx.import) {
              const markdownToLexical = getMarkdownToLexical(allNodes, allTransformers)

              const blockFields = block.jsx.import({
                children: content,
                props: propsString
                  ? extractPropsFromJSXPropsString({
                      propsString,
                    })
                  : {},
                openMatch: startMatch,
                markdownToLexical: markdownToLexical,
                htmlToLexical: null, // TODO
              })
              if (blockFields === false) {
                return {
                  return: [false, startLineIndex],
                }
              }

              const node = $createServerBlockNode({
                blockType: block.slug,
                ...blockFields,
              } as any)
              if (node) {
                rootNode.append(node)
              }

              return {
                return: [true, endLineIndex],
              }
            }

            // No multiline transformer handled this line successfully
            return {
              return: [false, startLineIndex],
            }
          },
      // This replace is ONLY run for ``` code blocks (so any blocks with custom start and end regexes). For others, we use the special JSX handling above:
      replace: (rootNode, children, openMatch, closeMatch, linesInBetween) => {
        if (block.jsx.import) {
          const childrenString = linesInBetween.join('\n').trim()

          let propsString: string | null = openMatch?.length > 1 ? openMatch[1]?.trim() : null

          const markdownToLexical = getMarkdownToLexical(allNodes, allTransformers)

          const blockFields = block.jsx.import({
            children: childrenString,
            props: propsString
              ? extractPropsFromJSXPropsString({
                  propsString,
                })
              : {},
            openMatch,
            closeMatch,
            markdownToLexical: markdownToLexical,
            htmlToLexical: null, // TODO
          })
          if (blockFields === false) {
            return false
          }

          const node = $createServerBlockNode({
            blockType: block.slug,
            ...blockFields,
          } as any)
          if (node) {
            rootNode.append(node)
          }

          return
        }
        return false // Run next transformer
      },
      type: 'multilineElement',
    }))
  }

  return transformers
}

export function getMarkdownToLexical(
  allNodes: Array<NodeWithHooks>,
  allTransformers: Transformer[],
): (args: { markdown: string }) => SerializedEditorState {
  const markdownToLexical = ({ markdown }: { markdown: string }): SerializedEditorState => {
    const headlessEditor = createHeadlessEditor({
      nodes: getEnabledNodesFromServerNodes({
        nodes: allNodes,
      }),
    })

    headlessEditor.update(
      () => {
        $convertFromMarkdownString(markdown, allTransformers)
      },
      { discrete: true },
    )

    const editorJSON = headlessEditor.getEditorState().toJSON()

    return editorJSON
  }
  return markdownToLexical
}

export function getLexicalToMarkdown(
  allNodes: Array<NodeWithHooks>,
  allTransformers: Transformer[],
): (args: { editorState: Record<string, any> }) => string {
  const lexicalToMarkdown = ({ editorState }: { editorState: Record<string, any> }): string => {
    const headlessEditor = createHeadlessEditor({
      nodes: getEnabledNodesFromServerNodes({
        nodes: allNodes,
      }),
    })

    try {
      headlessEditor.setEditorState(headlessEditor.parseEditorState(editorState as any)) // This should commit the editor state immediately
    } catch (e) {
      console.error('getLexicalToMarkdown: ERROR parsing editor state', e)
    }

    let markdown: string
    headlessEditor.getEditorState().read(() => {
      markdown = $convertToMarkdownString(allTransformers)
    })

    return markdown
  }
  return lexicalToMarkdown
}