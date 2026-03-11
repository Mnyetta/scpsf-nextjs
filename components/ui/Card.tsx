"use client";

import React from "react";

interface CardProps {
  title?: string;
  children: React.ReactNode;
}

export default function Card({ title, children }: CardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition text-gray-800">
      {title && <h3 className="text-xl font-bold mb-3">{title}</h3>}
      <p>{children}</p>
    </div>
  );
}