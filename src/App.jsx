import { useState, useEffect } from "react";
import MetricCard from "./components/MetricCard";

function App() {
  const [metrics, setMetrics] = useState([
    { label: "CPU Temp", value: 60, unit: "°C", subvalue: "Package" },
    { label: "GPU Temp", value: 55, unit: "°C", subvalue: "Edge" },
    { label: "GPU Junction", value: 72, unit: "°C", subvalue: "Hotspot" },
    { label: "RAM Usage", value: 40, unit: "%", subvalue: "of 32 GB" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) =>
        prev.map((m) => ({
          ...m,
          value:
            m.unit === "%"
              ? Math.floor(Math.random() * 100)
              : Math.floor(Math.random() * 30) + 50,
        }))
      );
    }, 1000);

    return () => clearInterval(interval);  }, []);

  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>PC Stats Dashboard - MVP</h1>
      <p style={{ opacity: 0.7 }}>Simulated Live Metrics</p>

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