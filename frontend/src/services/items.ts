import { fetchJson } from '../api'
import { useEffect, useState } from 'react'

export interface Item {
  id: number
  name: string
}

export async function fetchItems(): Promise<Item[]> {
  return fetchJson<Item[]>('/items')
}

export function useItems() {
  const [items, setItems] = useState<Item[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const load = async () => {
    setLoading(true)
    try {
      setItems(await fetchItems())
      setError(null)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [])

  return { items, loading, error, refetch: load }
}
