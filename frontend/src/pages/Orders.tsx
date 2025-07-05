import { useOrders } from '../services/orders'

export default function Orders() {
  const { orders, loading, error, refetch } = useOrders()

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Orders</h2>
        <button onClick={refetch}>Refresh</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Item ID</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.item_id}</td>
              <td>{o.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
