import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const lawyerId = searchParams.get("lawyerId");
    if (!lawyerId) return NextResponse.json([], { status: 200 });

    // 1. Fetch lawyer info and workload
    const lawyerRes = await query(
      `SELECT 
          u.id AS lawyer_id,
          u.full_name AS lawyer_name,
          u.email AS lawyer_email,
          COUNT(c.id) FILTER (WHERE c.status IN ('PENDING','ASSIGNED')) AS workload
       FROM users u
       LEFT JOIN cases c ON u.id = c.assigned_lawyer
       WHERE u.id = $1
       GROUP BY u.id`,
      [lawyerId]
    );

    if (lawyerRes.rows.length === 0) {
      return NextResponse.json({ success: false, message: "Lawyer not found" }, { status: 404 });
    }

    const lawyer = lawyerRes.rows[0];

    // 2. Fetch all cases assigned to this lawyer
    const casesRes = await query(
      `SELECT 
          c.id AS case_id,
          c.case_summary,
          c.crime_details,
          c.status,
          c.prisoner_name,
          c.prison_number,
          c.guardian_name,
          c.guardian_contact,
          c.created_at
       FROM cases c
       WHERE c.assigned_lawyer = $1
       ORDER BY c.created_at DESC`,
      [lawyerId]
    );

    return NextResponse.json({
      lawyer,
      cases: casesRes.rows,
    });

  } catch (err) {
    console.error("Fetch lawyer dashboard error:", err);
    return NextResponse.json(
      { success: false, message: "Database error" },
      { status: 500 }
    );
  }
}