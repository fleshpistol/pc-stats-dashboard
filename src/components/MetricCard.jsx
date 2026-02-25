export default function MetricCard({ label, value, unit, subvalue }) {
  return (
    <div
      style={{
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: 12,
        padding: 16,
        background: "rgba(255,255,255,0.04)",
        minWidth: 180,
      }}
    >
      <div style={{ fontSize: 12, opacity: 0.7, marginBottom: 8 }}>
        {label}
      </div>

      <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
        <div style={{ fontSize: 32, fontWeight: 700 }}>{value}</div>
        {unit ? <div style={{ fontSize: 14, opacity: 0.8 }}>{unit}</div> : null}
      </div>

      {subvalue ? (
        <div style={{ marginTop: 10, fontSize: 12, opacity: 0.7 }}>
          {subvalue}
        </div>
      ) : null}
    </div>
  );
}
