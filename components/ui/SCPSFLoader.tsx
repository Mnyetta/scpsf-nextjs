"use client";

import { useEffect, useState } from "react";

export default function SCPSFLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 6000;
    const interval = 50;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return old + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  if (loading) {
    return (
      <div className="scpsf-loader">

        {/* TOP PROGRESS LINE */}
        <div className="progress-container">
          <div
            className="progress-line"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="loader-content">

          <h1 className="loader-title">
            SECOND CHANCE PRISONERS'
            <br />
            SUPPORT FOUNDATION
          </h1>

          <p className="loader-subtitle">
            Restoring Justice • Restoring Hope
          </p>

        </div>

        <style jsx>{`

          .scpsf-loader{
            position:fixed;
            inset:0;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            background:radial-gradient(circle,#0a1a2f,#050b18);
            z-index:9999;
          }

          /* progress container */

          .progress-container{
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:3px;
            background:rgba(255,255,255,0.08);
          }

          /* animated progress line */

          .progress-line{
            height:100%;
            background:linear-gradient(
              90deg,
              #0d6efd,
              #38bdf8,
              #4da3ff
            );
            transition:width .05s linear;
            box-shadow:0 0 12px rgba(13,110,253,0.7);
          }

          /* center content */

          .loader-content{
            text-align:center;
            padding:40px;
          }

          .loader-title{
            color:white;
            font-size:22px;
            line-height:1.4;
            letter-spacing:0.5px;
          }

          .loader-subtitle{
            margin-top:10px;
            color:#9fb6ff;
            font-size:14px;
          }

        `}</style>
      </div>
    );
  }

  return <>{children}</>;
}