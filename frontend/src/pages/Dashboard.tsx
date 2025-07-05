import KeyMetricCard from '../components/KeyMetricCard'
import InventoryChart from '../components/dashboard/InventoryChart'
import OrderStatusChart from '../components/dashboard/OrderStatusChart'
import RecentActivity from '../components/dashboard/RecentActivity'
import LowStockList from '../components/dashboard/LowStockList'
import { useDashboardData } from '../services/dashboard'

export default function Dashboard() {
  const { data, loading, error, refetch } = useDashboardData()

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!data) return null

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Dashboard</h2>
        <button onClick={refetch}>Refresh</button>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', margin: '1rem 0' }}>
        <button>Create New Order</button>
        <button>Receive Goods</button>
        <button>Start Picking</button>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        <KeyMetricCard title="Total SKUs" value={data.totalSKUs} color="#4caf50" icon="category" />
        <KeyMetricCard title="Total Items" value={data.totalItems} color="#2196f3" icon="inventory" />
        <KeyMetricCard title="Inventory Value" value={`$${data.inventoryValue}`} color="#ff9800" icon="money" />
        <KeyMetricCard title="Pending Orders" value={data.pendingOrders} color="#f44336" icon="pending" />
        <KeyMetricCard title="Low Stock Items" value={data.lowStockItems} color="#ff5722" icon="warning" />
        <KeyMetricCard title="Critical Alerts" value={data.criticalAlerts} color="#d32f2f" icon="error" />
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
        <div style={{ flex: 1, minWidth: 280 }}>
          <InventoryChart data={data.inventoryByCategory} />
        </div>
        <div style={{ flex: 1, minWidth: 280 }}>
          <OrderStatusChart data={data.orderStatusData} />
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
        <div style={{ flex: 1, minWidth: 280 }}>
          <RecentActivity activities={data.recentActivities} />
        </div>
        <div style={{ flex: 1, minWidth: 280 }}>
          <LowStockList items={data.lowStockList} />
        </div>
      </div>
    </div>
  )
}
