interface Props {
  title: string
  value: string | number
  icon?: string
  color?: string
  onView?: () => void
}

export default function KeyMetricCard({ title, value, icon, color, onView }: Props) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '0.5rem',
        borderRadius: 4,
        width: 160,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4 style={{ margin: 0 }}>{title}</h4>
        {icon && (
          <span
            style={{
              width: 24,
              height: 24,
              borderRadius: '50%',
              background: color || '#eee',
              display: 'inline-block',
            }}
          />
        )}
      </div>
      <div style={{ fontSize: '1.5rem' }}>{value}</div>
      {onView && <button onClick={onView}>View Details</button>}
    </div>
  )
}
