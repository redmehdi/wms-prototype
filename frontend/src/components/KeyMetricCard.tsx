interface Props {
  title: string;
  value: string | number;
  onView?: () => void;
}

export default function KeyMetricCard({ title, value, onView }: Props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '0.5rem', borderRadius: 4, width: 160 }}>
      <h4 style={{ margin: 0 }}>{title}</h4>
      <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{value}</div>
      {onView && <button onClick={onView}>View Details</button>}
    </div>
  );
}
