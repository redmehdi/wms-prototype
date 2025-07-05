import { useItems } from '../services/items'

export default function Inventory() {
  const { items, loading, error, refetch } = useItems()

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Inventory</h2>
        <button onClick={refetch}>Refresh</button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}
