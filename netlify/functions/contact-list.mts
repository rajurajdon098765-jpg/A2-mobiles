import type { Config, Context } from '@netlify/functions'
import { getStore } from '@netlify/blobs'

export default async (req: Request, context: Context) => {
  const store = getStore({ name: 'contacts', consistency: 'strong' })
  const { blobs } = await store.list()

  const contacts = []
  for (const blob of blobs) {
    const contact = await store.get(blob.key, { type: 'json' })
    if (contact) {
      contacts.push(contact)
    }
  }

  // Sort by created_at descending (newest first)
  contacts.sort((a: any, b: any) =>
    new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  )

  return new Response(JSON.stringify(contacts), {
    headers: { 'Content-Type': 'application/json' },
  })
}

export const config: Config = {
  path: '/api/contacts',
  method: 'GET',
}
