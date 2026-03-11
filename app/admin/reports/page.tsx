export default function ReportsPage() {
  return (
    <div className="bg-white p-8 rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4">Reports</h1>

      <p className="text-gray-600">
        Generate system reports such as:
      </p>

      <ul className="list-disc ml-6 mt-4 text-gray-700">
        <li>Monthly case summaries</li>
        <li>Lawyer workload reports</li>
        <li>Case status distribution</li>
        <li>System activity logs</li>
      </ul>
    </div>
  );
}