import MetricCard from "./components/MetricCard";

function App() {
  // Fake data for MVP UI build (we'll replace with real sensor data later)
  const metrics = [
    { label: "CPU Temp", value: 62, unit: "°C", subvalue: "Package" },
    { label: "GPU Temp", value: 58, unit: "°C", subvalue: "Edge" },
    { label: "GPU Junction", value: 74, unit: "°C", subvalue: "Hotspot" },
    { label: "RAM Usage", value: 41, unit: "%", subvalue: "of 32 GB" },
  ];

  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1 style={{ marginBottom: 8 }}>PC Stats Dashboard - MVP</h1>
      <div style={{ opacity: 0.7, marginBottom: 24 }}>
        Waiting for system metrics...
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 16,
          maxWidth: 900,
        }}
      >
        {metrics.map((m) => (
          <MetricCard
            key={m.label}
            label={m.label}
            value={m.value}
            unit={m.unit}
            subvalue={m.subvalue}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
