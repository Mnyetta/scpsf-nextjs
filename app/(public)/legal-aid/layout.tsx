import { ReactNode } from "react";

export const metadata = {
  title: "Request Legal Aid",
};

export default function LegalAidLayout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f0f3f8 0%, #e1e7ee 100%)",
        minHeight: "100vh",
        padding: "2rem",
        fontFamily: "'e-Ukraine', sans-serif",
      }}
    >
      {children}
    </div>
  );
}