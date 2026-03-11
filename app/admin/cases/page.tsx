"use client";

import { useEffect, useState } from "react";

interface Case {
  id: string;
  prisoner_name: string;
  prison_number: string;
  status: string;
  created_at: string;
}

export default function CasesPage() {
  const [cases, setCases] = useState<Case[]>([]);

  useEffect(() => {
    fetch("/api/admin/cases")
      .then((res) => res.json())
      .then((data) => setCases(data))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-white p-8 rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-6">Cases Management</h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Prisoner</th>
              <th className="p-3">Prison Number</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((c) => (
              <tr key={c.id} className="border-t">
                <td className="p-3">{c.prisoner_name}</td>
                <td className="p-3">{c.prison_number}</td>
                <td className="p-3 font-semibold text-blue-600">
                  {c.status}
                </td>
                <td className="p-3">
                  {new Date(c.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}