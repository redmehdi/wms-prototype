import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Dashboard</Link> |
        <Link to="/inventory">Inventory</Link> |
        <Link to="/orders">Orders</Link>
      </nav>
      <Outlet />
    </div>
  )
}
