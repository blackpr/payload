import type { Setting } from './payload-types.js'

import { buildConfigWithDefaults } from '../buildConfigWithDefaults.js'
import { devUser } from '../credentials.js'
import GlobalViewWithRefresh from './GlobalViewWithRefresh.js'

export const pagesSlug = 'pages'

export default buildConfigWithDefaults({
  globals: [
    {
      slug: 'settings',
      fields: [
        {
          type: 'checkbox',
          name: 'test',
          label: 'Allow access to test global',
        },
      ],
      admin: {
        components: {
          views: {
            Edit: GlobalViewWithRefresh,
          },
        },
      },
    },
    {
      slug: 'test',
      fields: [],
      access: {
        read: async ({ req: { payload } }) => {
          const access: Setting = (await payload.findGlobal({ slug: 'settings' })) as Setting
          return access.test
        },
      },
    },
  ],
  collections: [
    {
      slug: 'users',
      auth: true,
      fields: [],
    },
  ],
  onInit: async (payload) => {
    await payload.create({
      collection: 'users',
      data: {
        email: devUser.email,
        password: devUser.password,
      },
    })
  },
})
