"use client";

import { useEffect, useState } from "react";

interface MonthlyData {
  month: string; // YYYY-MM
  total: number;
}

export default function CaseTrendHeatmap() {
  const [monthly, setMonthly] = useState<MonthlyData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/reviewer/case-stats-trend");
        const data = await res.json();
        setMonthly(data.monthly || []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const max = Math.max(...monthly.map(m => m.total), 1);

  return (
    <div style={{ marginTop: 30 }}>
      <h2>Case Processing Trends (Heatmap)</h2>
      <div style={{ display: "flex", gap: 8 }}>
        {monthly.map((m) => {
          const intensity = (m.total / max) * 100; // 0 → 100%
          const bgColor = `rgba(30, 58, 138, ${0.3 + 0.7 * (intensity / 100)})`; // Blue gradient
          const monthLabel = new Date(m.month).toLocaleString('default', { month: 'short' });

          return (
            <div key={m.month} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "40px",
                  height: `${50 + intensity}px`, // height proportional
                  background: bgColor,
                  borderRadius: 4,
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 600,
                  transition: "all 0.3s ease"
                }}
                title={`${m.total} cases in ${monthLabel}`}
              >
                <span style={{ fontSize: 12, marginBottom: 2 }}>{m.total}</span>
              </div>
              <small>{monthLabel}</small>
            </div>
          );
        })}
      </div>
    </div>
  );
}