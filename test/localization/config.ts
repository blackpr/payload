import type { LocalizedPost } from './payload-types'

import { buildConfigWithDefaults } from '../buildConfigWithDefaults'
import { devUser } from '../credentials'
import { ArrayCollection } from './collections/Array'
import { NestedToArrayAndBlock } from './collections/NestedToArrayAndBlock'
import {
  defaultLocale,
  englishTitle,
  localizedPostsSlug,
  relationEnglishTitle,
  relationEnglishTitle2,
  relationSpanishTitle,
  relationSpanishTitle2,
  relationshipLocalizedSlug,
  spanishLocale,
  spanishTitle,
  withLocalizedRelSlug,
  withRequiredLocalizedFields,
} from './shared'

export type LocalizedPostAllLocale = LocalizedPost & {
  title: {
    en?: string
    es?: string
  }
}

const openAccess = {
  read: () => true,
  create: () => true,
  delete: () => true,
  update: () => true,
}

export default buildConfigWithDefaults({
  localization: {
    locales: [
      {
        label: 'English',
        code: defaultLocale,
        rtl: false,
      },
      {
        label: 'Spanish',
        code: spanishLocale,
        rtl: false,
      },
      {
        label: 'Arabic',
        code: 'ar',
        rtl: true,
      },
    ],
    defaultLocale,
    fallback: true,
  },
  collections: [
    {
      slug: 'users',
      auth: true,
      fields: [
        {
          name: 'relation',
          type: 'relationship',
          relationTo: localizedPostsSlug,
        },
      ],
    },
    {
      slug: localizedPostsSlug,
      access: openAccess,
      admin: {
        useAsTitle: 'title',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          localized: true,
          index: true,
        },
        {
          name: 'description',
          type: 'text',
        },
        {
          name: 'localizedCheckbox',
          type: 'checkbox',
          localized: true,
        },
        {
          name: 'children',
          type: 'relationship',
          relationTo: localizedPostsSlug,
          hasMany: true,
        },
        {
          type: 'group',
          name: 'group',
          fields: [
            {
              name: 'children',
              type: 'text',
            },
          ],
        },
      ],
    },
    ArrayCollection,
    {
      slug: withRequiredLocalizedFields,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'layout',
          type: 'blocks',
          required: true,
          localized: true,
          blocks: [
            {
              slug: 'text',
              fields: [
                {
                  name: 'text',
                  type: 'text',
                },
              ],
            },
            {
              slug: 'number',
              fields: [
                {
                  name: 'number',
                  type: 'number',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      slug: withLocalizedRelSlug,
      access: openAccess,
      fields: [
        // Relationship
        {
          name: 'localizedRelationship',
          type: 'relationship',
          relationTo: localizedPostsSlug,
        },
        // Relation hasMany
        {
          name: 'localizedRelationHasManyField',
          type: 'relationship',
          relationTo: localizedPostsSlug,
          hasMany: true,
        },
        // Relation multiple relationTo
        {
          name: 'localizedRelationMultiRelationTo',
          type: 'relationship',
          relationTo: [localizedPostsSlug, 'dummy'],
        },
        // Relation multiple relationTo hasMany
        {
          name: 'localizedRelationMultiRelationToHasMany',
          type: 'relationship',
          relationTo: [localizedPostsSlug, 'dummy'],
          hasMany: true,
        },
      ],
    },
    {
      slug: relationshipLocalizedSlug,
      fields: [
        {
          name: 'relationship',
          type: 'relationship',
          relationTo: localizedPostsSlug,
          localized: true,
        },
        {
          name: 'relationshipHasMany',
          type: 'relationship',
          relationTo: localizedPostsSlug,
          hasMany: true,
          localized: true,
        },
        {
          name: 'relationMultiRelationTo',
          type: 'relationship',
          relationTo: [localizedPostsSlug, 'dummy'],
          localized: true,
        },
        {
          name: 'relationMultiRelationToHasMany',
          type: 'relationship',
          relationTo: [localizedPostsSlug, 'dummy'],
          hasMany: true,
          localized: true,
        },
        {
          name: 'arrayField',
          label: 'Array Field',
          type: 'array',
          localized: true,
          fields: [
            {
              type: 'relationship',
              name: 'nestedRelation',
              label: 'Nested Relation',
              relationTo: localizedPostsSlug,
            },
          ],
        },
      ],
    },
    {
      slug: 'dummy',
      access: openAccess,
      fields: [
        {
          name: 'name',
          type: 'text',
        },
      ],
    },
    NestedToArrayAndBlock,
  ],
  globals: [
    {
      slug: 'global-array',
      fields: [
        {
          name: 'array',
          type: 'array',
          fields: [
            {
              name: 'text',
              type: 'text',
              localized: true,
            },
          ],
        },
      ],
    },
  ],
  onInit: async (payload) => {
    const collection = localizedPostsSlug

    await payload.create({
      collection,
      data: {
        title: englishTitle,
      },
    })

    const localizedPost = await payload.create({
      collection,
      data: {
        title: englishTitle,
      },
    })

    await payload.create({
      collection: 'users',
      data: {
        email: devUser.email,
        password: devUser.password,
        relation: localizedPost.id,
      },
    })

    await payload.update({
      collection,
      id: localizedPost.id,
      locale: spanishLocale,
      data: {
        title: spanishTitle,
      },
    })

    const localizedRelation = await payload.create({
      collection,
      data: {
        title: relationEnglishTitle,
      },
    })

    await payload.update({
      collection,
      id: localizedPost.id,
      locale: spanishLocale,
      data: {
        title: relationSpanishTitle,
      },
    })

    const localizedRelation2 = await payload.create({
      collection,
      data: {
        title: relationEnglishTitle2,
      },
    })
    await payload.update({
      collection,
      id: localizedPost.id,
      locale: spanishLocale,
      data: {
        title: relationSpanishTitle2,
      },
    })

    await payload.create({
      collection: withLocalizedRelSlug,
      data: {
        relationship: localizedRelation.id,
        localizedRelationHasManyField: [localizedRelation.id, localizedRelation2.id],
        localizedRelationMultiRelationTo: { relationTo: collection, value: localizedRelation.id },
        localizedRelationMultiRelationToHasMany: [
          { relationTo: localizedPostsSlug, value: localizedRelation.id },
          { relationTo: localizedPostsSlug, value: localizedRelation2.id },
        ],
      },
    })
    await payload.create({
      collection: relationshipLocalizedSlug,
      locale: 'en',
      data: {
        relationship: localizedRelation.id,
        relationshipHasMany: [localizedRelation.id, localizedRelation2.id],
        relationMultiRelationTo: { relationTo: collection, value: localizedRelation.id },
        relationMultiRelationToHasMany: [
          { relationTo: localizedPostsSlug, value: localizedRelation.id },
          { relationTo: localizedPostsSlug, value: localizedRelation2.id },
        ],
        arrayField: [
          {
            nestedRelation: localizedRelation.id,
          },
        ],
      },
    })

    const globalArray = await payload.updateGlobal({
      slug: 'global-array',
      data: {
        array: [
          {
            text: 'test en 1',
          },
          {
            text: 'test en 2',
          },
        ],
      },
    })

    await payload.updateGlobal({
      slug: 'global-array',
      locale: 'es',
      data: {
        array: globalArray.array.map((row, i) => ({
          ...row,
          text: `test es ${i + 1}`,
        })),
      },
    })
  },
})
