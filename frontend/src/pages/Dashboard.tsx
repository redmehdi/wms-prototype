import { useEffect, useState } from 'react';
import KeyMetricCard from '../components/KeyMetricCard';
import { DashboardData, fetchDashboard } from '../services/dashboard';

export default function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    try {
      setData(await fetchDashboard());
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={load}>Refresh</button>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
        <KeyMetricCard title="Total SKUs" value={data.totalSKUs} />
        <KeyMetricCard title="Total Items" value={data.totalItems} />
        <KeyMetricCard title="Inventory Value" value={`$${data.inventoryValue}`} />
        <KeyMetricCard title="Pending Orders" value={data.pendingOrders} />
        <KeyMetricCard title="Low Stock Items" value={data.lowStockItems} />
        <KeyMetricCard title="Critical Alerts" value={data.criticalAlerts} />
      </div>
    </div>
  );
}
