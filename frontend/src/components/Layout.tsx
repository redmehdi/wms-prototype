import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <nav style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <Link to="/">Dashboard</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/orders">Orders</Link>
      </nav>
      <Outlet />
    </div>
  )
}
