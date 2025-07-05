const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export async function fetchJson<T>(path: string): Promise<T> {
  const res = await fetch(`${API_URL}${path}`)
  if (!res.ok) throw new Error(res.statusText)
  return res.json()
}
