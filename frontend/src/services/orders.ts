import { fetchJson } from '../api'
import { useEffect, useState } from 'react'

export interface Order {
  id: number
  item_id: number | null
  quantity: number
}

export async function fetchOrders(): Promise<Order[]> {
  return fetchJson<Order[]>('/orders')
}

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const load = async () => {
    setLoading(true)
    try {
      setOrders(await fetchOrders())
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

  return { orders, loading, error, refetch: load }
}
