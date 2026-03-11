"use client";

import { useEffect, useState } from "react";

interface Case {
  created_at: string;
  status: string;
}

export default function LawyerCaseTrendHeatmap({ cases }: { cases: Case[] }) {
  const [monthlyCounts, setMonthlyCounts] = useState<number[]>(new Array(12).fill(0));

  useEffect(() => {
    const counts = new Array(12).fill(0); // Jan-Dec

    cases.forEach((c) => {
      const date = new Date(c.created_at);
      const month = date.getMonth(); // 0=Jan, 11=Dec
      if (c.status === "COMPLETED") counts[month]++;
    });

    setMonthlyCounts(counts);
  }, [cases]);

  // Determine max for color intensity
  const maxCount = Math.max(...monthlyCounts, 1);

  const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  return (
    <div style={{ marginTop: 40 }}>
      <h2 style={{ color: "#1e3a8a" }}>📊 Case Completion Heatmap</h2>
      <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
        {monthlyCounts.map((count, i) => {
          // Heatmap color intensity based on count
          const intensity = Math.floor((count / maxCount) * 255);
          const color = `rgb(30, 58, 138, ${(count / maxCount) * 0.8 + 0.2})`; // Blue shades
          return (
            <div key={i} style={{ textAlign: "center" }}>
              <div
                style={{
                  height: `${count * 20}px`,
                  width: "40px",
                  background: color,
                  borderRadius: 6,
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "0.8rem",
                  transition: "all 0.3s ease",
                }}
              >
                {count}
              </div>
              <span style={{ fontSize: "0.75rem" }}>{monthNames[i]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}