'use client'
import type { FieldPermissions } from 'payload/auth'
import type { DocumentPreferences } from 'payload/types'

import { getTranslation } from '@payloadcms/translations'
import { FieldDescription } from '@payloadcms/ui/forms/FieldDescription'
import { toKebabCase } from 'payload/utilities'
import React, { useCallback, useEffect, useState } from 'react'

import type { MappedTab } from '../../providers/ComponentMap/buildComponentMap/types.js'
import type { FormFieldBase } from '../shared/index.js'

import { useCollapsible } from '../../elements/Collapsible/provider.js'
import { useFieldProps } from '../../forms/FieldPropsProvider/index.js'
import { RenderFields } from '../../forms/RenderFields/index.js'
import { withCondition } from '../../forms/withCondition/index.js'
import { useDocumentInfo } from '../../providers/DocumentInfo/index.js'
import { usePreferences } from '../../providers/Preferences/index.js'
import { useTranslation } from '../../providers/Translation/index.js'
import { fieldBaseClass } from '../shared/index.js'
import { TabComponent } from './Tab/index.js'
import './index.scss'
import { TabsProvider } from './provider.js'

const baseClass = 'tabs-field'

export { TabsProvider }

export type TabsFieldProps = FormFieldBase & {
  forceRender?: boolean
  name?: string
  path?: string
  permissions: FieldPermissions
  tabs?: MappedTab[]
  width?: string
}

const TabsField: React.FC<TabsFieldProps> = (props) => {
  const {
    name,
    CustomDescription,
    className,
    descriptionProps,
    forceRender = false,
    path: pathFromProps,
    readOnly: readOnlyFromProps,
    tabs = [],
  } = props

  const {
    indexPath,
    path: pathFromContext,
    permissions,
    readOnly: readOnlyFromContext,
    schemaPath,
  } = useFieldProps()
  const readOnly = readOnlyFromProps || readOnlyFromContext
  const path = pathFromContext || pathFromProps || name
  const { getPreference, setPreference } = usePreferences()
  const { preferencesKey } = useDocumentInfo()
  const { i18n } = useTranslation()
  const { isWithinCollapsible } = useCollapsible()
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0)
  const tabsPrefKey = `tabs-${indexPath}`

  useEffect(() => {
    const getInitialPref = async () => {
      const existingPreferences: DocumentPreferences = await getPreference(preferencesKey)
      const initialIndex = path
        ? existingPreferences?.fields?.[path]?.tabIndex
        : existingPreferences?.fields?.[tabsPrefKey]?.tabIndex
      setActiveTabIndex(initialIndex || 0)
    }
    void getInitialPref()
  }, [path, getPreference, preferencesKey, tabsPrefKey])

  const handleTabChange = useCallback(
    async (incomingTabIndex: number) => {
      setActiveTabIndex(incomingTabIndex)

      const existingPreferences: DocumentPreferences = await getPreference(preferencesKey)

      void setPreference(preferencesKey, {
        ...existingPreferences,
        ...(path
          ? {
              fields: {
                ...(existingPreferences?.fields || {}),
                [path]: {
                  ...existingPreferences?.fields?.[path],
                  tabIndex: incomingTabIndex,
                },
              },
            }
          : {
              fields: {
                ...existingPreferences?.fields,
                [tabsPrefKey]: {
                  ...existingPreferences?.fields?.[tabsPrefKey],
                  tabIndex: incomingTabIndex,
                },
              },
            }),
      })
    },
    [preferencesKey, getPreference, setPreference, path, tabsPrefKey],
  )

  const activeTabConfig = tabs[activeTabIndex]

  return (
    <div
      className={[
        fieldBaseClass,
        className,
        baseClass,
        isWithinCollapsible && `${baseClass}--within-collapsible`,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <TabsProvider>
        <div className={`${baseClass}__tabs-wrap`}>
          <div className={`${baseClass}__tabs`}>
            {tabs.map((tab, tabIndex) => {
              return (
                <TabComponent
                  isActive={activeTabIndex === tabIndex}
                  key={tabIndex}
                  parentPath={path}
                  setIsActive={() => handleTabChange(tabIndex)}
                  tab={tab}
                />
              )
            })}
          </div>
        </div>
        <div className={`${baseClass}__content-wrap`}>
          {activeTabConfig && (
            <React.Fragment>
              <div
                className={[
                  `${baseClass}__tab`,
                  activeTabConfig.label &&
                    `${baseClass}__tabConfigLabel-${toKebabCase(
                      getTranslation(activeTabConfig.label, i18n),
                    )}`,
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {CustomDescription ? (
                  CustomDescription
                ) : (
                  <FieldDescription {...(descriptionProps || {})} />
                )}
                <RenderFields
                  fieldMap={activeTabConfig.fieldMap}
                  forceRender={forceRender}
                  key={
                    activeTabConfig.label
                      ? getTranslation(activeTabConfig.label, i18n)
                      : activeTabConfig['name']
                  }
                  margins="small"
                  path={`${path ? `${path}.` : ''}${activeTabConfig.name ? `${activeTabConfig.name}` : ''}`}
                  permissions={
                    'name' in activeTabConfig && permissions?.fields?.[activeTabConfig.name]?.fields
                      ? permissions?.fields?.[activeTabConfig.name]?.fields
                      : permissions?.fields
                  }
                  readOnly={readOnly}
                  schemaPath={`${schemaPath ? `${schemaPath}` : ''}${activeTabConfig.name ? `.${activeTabConfig.name}` : ''}`}
                />
              </div>
            </React.Fragment>
          )}
        </div>
      </TabsProvider>
    </div>
  )
}

export const Tabs = withCondition(TabsField)
