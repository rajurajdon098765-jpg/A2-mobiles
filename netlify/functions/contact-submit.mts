import type { Config, Context } from '@netlify/functions'
import { getStore } from '@netlify/blobs'

export default async (req: Request, context: Context) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const body = await req.json()
  const { name, phone, email, service, message } = body

  if (!name || !phone || !service) {
    return new Response(
      JSON.stringify({ error: 'Name, phone, and service are required.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    )
  }

  const store = getStore({ name: 'contacts', consistency: 'strong' })
  const id = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`

  const contact = {
    id,
    name,
    phone,
    email: email || '',
    service,
    message: message || '',
    created_at: new Date().toISOString(),
  }

  await store.setJSON(id, contact)

  return new Response(JSON.stringify(contact), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  })
}

export const config: Config = {
  path: '/api/contacts',
  method: 'POST',
}
