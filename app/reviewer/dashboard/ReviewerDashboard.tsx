"use client";

import { useEffect, useState } from "react";
import CaseStatsGraph from "@/components/reviewer/CaseStatsGraph";
import WorkloadHeatmap from "@/components/reviewer/WorkloadHeatmap";
import MinistryDashboard from "@/components/reviewer/MinistryDashboard";
import NotificationBell from "@/components/reviewer/NotificationBell";
import CaseTrendHeatmap from "@/components/reviewer/CaseTrendHeatmap";

export default function ReviewerDashboard({ initialCases }: any) {
  const [cases, setCases] = useState(initialCases);
  const [lawyers, setLawyers] = useState<any[]>([]);
  const [selectedCase, setSelectedCase] = useState<any>(null);
  const [selectedLawyer, setSelectedLawyer] = useState("");

  /* LOAD LAWYERS */
  useEffect(() => {
    fetch("/api/reviewer/lawyers")
      .then(res => res.json())
      .then(setLawyers);
  }, []);

  /* ASSIGN LAWYER */
  const assignLawyer = async () => {
    if (!selectedLawyer) return alert("Select lawyer");

    await fetch("/api/reviewer/assign-manual", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        caseId: selectedCase.id,
        lawyerId: selectedLawyer
      })
    });

    location.reload();
  };

  /* AUTO ASSIGN */
  const autoAssign = async () => {
    await fetch("/api/reviewer/assign-auto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        caseId: selectedCase.id
      })
    });

    location.reload();
  };

  return (
    <div style={{ padding: 40, fontFamily: "Arial, sans-serif", background: "linear-gradient(135deg, #f5f7fa, #e3eaf2)" }}>
      <h1 style={{ marginBottom: 30, fontWeight: 700, fontSize: "2rem", color: "#1e3a8a" }}>⚖ Reviewer Dashboard</h1>

      <NotificationBell/>

      {/* Existing case stats */}
      <CaseStatsGraph/>

      {/* New: Monthly case trend heatmap */}
      <CaseTrendHeatmap/>

      <h2 style={{ marginTop: 40 }}>Lawyer Workload</h2>
      <WorkloadHeatmap lawyers={lawyers}/>

      {/* Cases Table */}
      {/* Cases Table */}
<table style={{ width: "100%", marginTop: 40, borderCollapse: "collapse" }}>
  <thead>
    <tr style={{ background: "#1e3a8a", color: "white" }}>
      <th style={{ padding: 8 }}>Case</th>
      <th>Status</th>
      <th>Date</th>
      <th>Original Case No</th>
      <th>Original Case Ref No</th>
      <th>Original Court</th>
      <th>Prison Name</th>
      <th>Prison Location</th>
      <th>Admission Office</th>
      <th>Date of Imprisonment</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {cases.map((c: any) => (
      <tr key={c.id}>
        <td>{c.case_summary}</td>
        <td>{c.status}</td>
        <td>{new Date(c.created_at).toLocaleDateString()}</td>
        <td>{c.original_case_no || "-"}</td>
        <td>{c.original_case_ref_no || "-"}</td>
        <td>{c.original_court || "-"}</td>
        <td>{c.prison_name || "-"}</td>
        <td>{c.prison_location || "-"}</td>
        <td>{c.admission_office || "-"}</td>

<td>
  {c.date_of_imprisonment
    ? new Date(c.date_of_imprisonment).toLocaleDateString()
    : "-"}
</td>
        <td>
          {c.status === "PENDING" && (
            <button onClick={() => setSelectedCase(c)}>Review</button>
          )}
        </td>
      </tr>
    ))}
  </tbody>
</table>

      {/* Case Assignment Modal */}
      {selectedCase && (
        <div style={{ marginTop: 20, padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
          <h3>{selectedCase.case_summary}</h3>
          <select value={selectedLawyer} onChange={(e) => setSelectedLawyer(e.target.value)}>
            <option value="">Select Lawyer</option>
            {lawyers.map((l: any) => (
              <option key={l.id} value={l.id}>{l.name}</option>
            ))}
          </select>
          <br/><br/>
          <button onClick={assignLawyer}>Manual Assign</button>
          <button onClick={autoAssign}>Auto Assign</button>
        </div>
      )}

      <MinistryDashboard/>
    </div>
  );
}

