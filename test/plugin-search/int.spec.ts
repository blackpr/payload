import type { Payload } from 'payload'

import path from 'path'
import { wait } from 'payload/shared'
import { fileURLToPath } from 'url'

import { initPayloadInt } from '../helpers/initPayloadInt.js'

let payload: Payload

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

describe('@payloadcms/plugin-search', () => {
  beforeAll(async () => {
    ;({ payload } = await initPayloadInt(dirname))
  })

  afterAll(async () => {
    if (typeof payload.db.destroy === 'function') {
      await payload.db.destroy()
    }
  })

  it('should add a search collection', async () => {
    const search = await payload.find({
      collection: 'search',
      depth: 0,
      limit: 1,
    })

    expect(search).toBeTruthy()
  })

  it('should sync published pages to the search collection', async () => {
    const pageToSync = await payload.create({
      collection: 'pages',
      data: {
        _status: 'published',
        excerpt: 'This is a test page',
        title: 'Hello, world!',
      },
    })

    const { docs: results } = await payload.find({
      collection: 'search',
      depth: 0,
      where: {
        'doc.value': {
          equals: pageToSync.id,
        },
      },
    })

    expect(results).toHaveLength(1)
    expect(results[0].doc.value).toBe(pageToSync.id)
    expect(results[0].title).toBe('Hello, world!')
    expect(results[0].excerpt).toBe('This is a test page')
  })

  it('should not sync drafts pages to the search collection', async () => {
    const draftPage = await payload.create({
      collection: 'pages',
      data: {
        _status: 'draft',
        excerpt: 'This is a test page',
        title: 'Hello, world!',
      },
    })

    // wait for the search document to be potentially created
    // we do not await this within the `syncToSearch` hook
    await wait(200)

    const { docs: results } = await payload.find({
      collection: 'search',
      depth: 0,
      where: {
        'doc.value': {
          equals: draftPage.id,
        },
      },
    })

    expect(results).toHaveLength(0)
  })

  it('should sync changes made to an existing search document', async () => {
    const pageToReceiveUpdates = await payload.create({
      collection: 'pages',
      data: {
        _status: 'published',
        excerpt: 'This is a test page',
        title: 'Hello, world!',
      },
    })

    const { docs: results } = await payload.find({
      collection: 'search',
      depth: 0,
      where: {
        'doc.value': {
          equals: pageToReceiveUpdates.id,
        },
      },
    })

    expect(results).toHaveLength(1)
    expect(results[0].doc.value).toBe(pageToReceiveUpdates.id)
    expect(results[0].title).toBe('Hello, world!')
    expect(results[0].excerpt).toBe('This is a test page')

    await payload.update({
      id: pageToReceiveUpdates.id,
      collection: 'pages',
      data: {
        excerpt: 'This is a test page (updated)',
        title: 'Hello, world! (updated)',
      },
    })

    // wait for the search document to be potentially updated
    // we do not await this within the `syncToSearch` hook
    await wait(200)

    // Do not add `limit` to this query, this way we can test if multiple documents were created
    const { docs: updatedResults } = await payload.find({
      collection: 'search',
      depth: 0,
      where: {
        'doc.value': {
          equals: pageToReceiveUpdates.id,
        },
      },
    })

    expect(updatedResults).toHaveLength(1)
    expect(updatedResults[0].doc.value).toBe(pageToReceiveUpdates.id)
    expect(updatedResults[0].title).toBe('Hello, world! (updated)')
    expect(updatedResults[0].excerpt).toBe('This is a test page (updated)')
  })

  it('should clear the search document when the original document is deleted', async () => {
    const page = await payload.create({
      collection: 'pages',
      data: {
        _status: 'published',
        excerpt: 'This is a test page',
        title: 'Hello, world!',
      },
    })

    // wait for the search document to be created
    // we do not await this within the `syncToSearch` hook
    await wait(200)

    const { docs: results } = await payload.find({
      collection: 'search',
      depth: 0,
      where: {
        'doc.value': {
          equals: page.id,
        },
      },
    })

    expect(results).toHaveLength(1)
    expect(results[0].doc.value).toBe(page.id)

    await payload.delete({
      id: page.id,
      collection: 'pages',
    })

    // wait for the search document to be potentially deleted
    // we do not await this within the `syncToSearch` hook
    await wait(200)

    const { docs: deletedResults } = await payload.find({
      collection: 'search',
      depth: 0,
      where: {
        'doc.value': {
          equals: page.id,
        },
      },
    })

    expect(deletedResults).toHaveLength(0)
  })

  it('should sync localized data', async () => {
    const createdDoc = await payload.create({
      collection: 'posts',
      data: {
        _status: 'published',
        title: 'test title',
        slug: 'es',
      },
      locale: 'es',
    })

    await payload.update({
      collection: 'posts',
      id: createdDoc.id,
      data: {
        _status: 'published',
        title: 'test title',
        slug: 'en',
      },
      locale: 'en',
    })

    const syncedSearchData = await payload.find({
      collection: 'search',
      locale: 'es',
      where: {
        and: [
          {
            'doc.value': {
              equals: createdDoc.id,
            },
          },
        ],
      },
    })

    expect(syncedSearchData.docs[0].slug).toEqual('es')
  })
})
