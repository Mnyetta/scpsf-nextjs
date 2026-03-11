// app/lawyer/dashboard/page.tsx

import DashboardClient from "./DashboardClient";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { query } from "@/lib/db";

export default async function DashboardPage() {
  try {

    // ✅ Await cookies()
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return <div>Please log in to see your dashboard</div>;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      id: string;
      full_name: string;
      role: string;
    };

    const casesResult = await query(
      `SELECT
        c.id,
        c.case_summary,
        c.status,
        c.created_at,
        c.prisoner_name,
        c.prison_number,
        c.guardian_name,
        c.guardian_contact,
        c.lawyer_notes
       FROM cases c
       WHERE c.assigned_lawyer = $1
       ORDER BY c.created_at DESC`,
      [decoded.id]
    );

    return (
      <DashboardClient
        cases={casesResult.rows}
        lawyerName={decoded.full_name}
        role={decoded.role}
      />
    );

  } catch (error) {
    console.error("Dashboard error:", error);
    return <div>Failed to load dashboard</div>;
  }
}