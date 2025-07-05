import React from 'react'
import { LowStockItem } from '../../services/dashboard'

interface Props {
  items: LowStockItem[]
}

export default function LowStockList({ items }: Props) {
  return (
    <div>
      <h3>Low Stock Items</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Current</th>
            <th>Min</th>
            <th>Reorder</th>
          </tr>
        </thead>
        <tbody>
          {items.map((i) => (
            <tr key={i.id}>
              <td>{i.name}</td>
              <td>{i.currentStock}</td>
              <td>{i.minStock}</td>
              <td>{i.reorderQuantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
