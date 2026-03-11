"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-6">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <ul className="space-y-4">
        <li><Link href="/dashboard/admin" className="hover:text-yellow-400">Admin</Link></li>
        <li><Link href="/dashboard/lawyers" className="hover:text-yellow-400">Lawyers</Link></li>
        <li><Link href="/dashboard/prisoners" className="hover:text-yellow-400">Prisoners</Link></li>
        <li><Link href="/dashboard/cases" className="hover:text-yellow-400">Cases</Link></li>
        <li><Link href="/dashboard/donations" className="hover:text-yellow-400">Donations</Link></li>
        <li><Link href="/dashboard/analytics" className="hover:text-yellow-400">Analytics</Link></li>
        <li><Link href="/dashboard/settings" className="hover:text-yellow-400">Settings</Link></li>
      </ul>
    </aside>
  );
}