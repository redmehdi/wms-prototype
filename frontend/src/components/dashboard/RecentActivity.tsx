import React from 'react'
import { RecentActivity as Activity } from '../../services/dashboard'

interface Props {
  activities: Activity[]
}

export default function RecentActivity({ activities }: Props) {
  return (
    <div>
      <h3>Recent Inventory Changes</h3>
      <ul>
        {activities.map((a) => (
          <li key={a.id}>
            {a.timestamp}: {a.action} {a.quantity} {a.item}
          </li>
        ))}
      </ul>
    </div>
  )
}
