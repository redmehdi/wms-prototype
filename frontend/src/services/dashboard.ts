import { fetchJson } from '../api'
import { useEffect, useState } from 'react'

export interface InventoryByCategory {
  category: string;
  count: number;
}

export interface OrderStatusData {
  status: string;
  count: number;
}

export interface RecentActivity {
  id: string;
  action: string;
  item: string;
  quantity: number;
  timestamp: string;
}

export interface LowStockItem {
  id: string;
  name: string;
  currentStock: number;
  minStock: number;
  reorderQuantity: number;
}

export interface DashboardData {
  totalSKUs: number;
  totalItems: number;
  inventoryValue: number;
  pendingOrders: number;
  lowStockItems: number;
  criticalAlerts: number;
  inventoryByCategory: InventoryByCategory[];
  orderStatusData: OrderStatusData[];
  recentActivities: RecentActivity[];
  lowStockList: LowStockItem[];
}

export async function fetchDashboard(): Promise<DashboardData> {
  return fetchJson<DashboardData>('/dashboard');
}

export function useDashboardData() {
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const load = async () => {
    setLoading(true)
    try {
      setData(await fetchDashboard())
      setError(null)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
    const id = setInterval(load, 5 * 60 * 1000)
    return () => clearInterval(id)
  }, [])

  return { data, loading, error, refetch: load }
}
