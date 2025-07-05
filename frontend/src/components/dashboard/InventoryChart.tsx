import React from 'react'
import { InventoryByCategory } from '../../services/dashboard'

interface Props {
  data: InventoryByCategory[]
}

export default function InventoryChart({ data }: Props) {
  return (
    <div>
      <h3>Inventory by Category</h3>
      {data.map((d) => (
        <div key={d.category} style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
          <div style={{ width: 120 }}>{d.category}</div>
          <div style={{ background: '#4caf50', height: 10, width: d.count * 5 }} />
          <div style={{ marginLeft: 8 }}>{d.count}</div>
        </div>
      ))}
    </div>
  )
}
