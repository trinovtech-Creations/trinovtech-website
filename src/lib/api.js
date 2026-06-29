// Minimal fetch helper for the Contact form.
// Override the base URL with VITE_API_URL in a .env file if needed.
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5050/api'

export async function postJSON(path, data) {
  const res = await fetch(`${API_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  const json = await res.json().catch(() => ({}))
  if (!res.ok || json.ok === false) {
    throw new Error(json.error || `Request failed (${res.status})`)
  }
  return json
}
