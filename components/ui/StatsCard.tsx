"use client";

interface StatsCardProps {
  title: string;
  value: number | string;
}

export default function StatsCard({ title, value }: StatsCardProps) {
  return (
    <div className="bg-gray-100 shadow rounded p-6 text-center hover:shadow-lg transition">
      <p className="text-gray-600">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}