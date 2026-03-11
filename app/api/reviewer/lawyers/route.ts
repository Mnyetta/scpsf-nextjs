import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET() {
  try {

    /* ---------------- GET LAWYERS FROM USERS TABLE ---------------- */

    const lawyersRes = await query(`
      SELECT
        id,
        full_name
      FROM users
      WHERE role = 'LAWYER'
      ORDER BY full_name
    `);

    const lawyers = lawyersRes.rows;

    /* ---------------- GET WORKLOAD ---------------- */

    const workloadRes = await query(`
      SELECT
        assigned_lawyer,
        COUNT(*) AS workload
      FROM cases
      WHERE status IN ('PENDING','ASSIGNED')
      GROUP BY assigned_lawyer
    `);

    const workloadMap: Record<string, number> = {};

    workloadRes.rows.forEach((r: any) => {
      if (r.assigned_lawyer) {
        workloadMap[r.assigned_lawyer] = Number(r.workload);
      }
    });

    /* ---------------- MERGE WORKLOAD ---------------- */

    const result = lawyers.map((l: any) => ({
      id: l.id,
      name: l.full_name,
      workload: workloadMap[l.id] || 0
    }));

    return NextResponse.json(result);

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch lawyers" },
      { status: 500 }
    );
  }
}