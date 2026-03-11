"use client";

import { useEffect, useState } from "react";

export default function PremiumLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800); // loader duration

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="premium-loader">
        <div className="loader-content">
          <div className="spinner"></div>

          <h1 className="brand">
            SECOND CHANCE PRISONERS'
            <br />
            SUPPORT FOUNDATION
          </h1>

          <p className="tagline">Restoring Justice • Restoring Hope</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}