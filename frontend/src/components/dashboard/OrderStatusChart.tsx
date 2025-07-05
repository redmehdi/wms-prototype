import React from 'react'
import { OrderStatusData } from '../../services/dashboard'

interface Props {
  data: OrderStatusData[]
}

export default function OrderStatusChart({ data }: Props) {
  return (
    <div>
      <h3>Orders / Shipments Status</h3>
      {data.map((d) => (
        <div key={d.status} style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
          <div style={{ width: 120 }}>{d.status}</div>
          <div style={{ background: '#2196f3', height: 10, width: d.count * 5 }} />
          <div style={{ marginLeft: 8 }}>{d.count}</div>
        </div>
      ))}
    </div>
  )
}
