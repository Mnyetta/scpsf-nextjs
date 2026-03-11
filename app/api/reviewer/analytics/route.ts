import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET() {
  try {

    // Case statistics
    const statsResult = await query(`
      SELECT
        COUNT(*) FILTER (WHERE status = 'PENDING') AS pending,
        COUNT(*) FILTER (WHERE status = 'ASSIGNED') AS assigned,
        COUNT(*) FILTER (WHERE status = 'COMPLETED') AS completed,

        COUNT(*) FILTER (
          WHERE status = 'PENDING'
          AND created_at < NOW() - INTERVAL '30 days'
        ) AS overdue_cases
      FROM cases
    `);

    // Monthly trend data
    const trendResult = await query(`
      SELECT
        TO_CHAR(DATE_TRUNC('month', created_at), 'Mon') AS month,
        COUNT(*) AS total
      FROM cases
      GROUP BY DATE_TRUNC('month', created_at)
      ORDER BY DATE_TRUNC('month', created_at)
    `);

    const stats = statsResult.rows[0];

    const monthly = trendResult.rows.map(row => ({
      month: row.month.trim(),
      total: Number(row.total)
    }));

    return NextResponse.json({
      stats,
      monthly
    });

  } catch (error) {

    console.error("Analytics Error:", error);

    return NextResponse.json(
      { error: "Analytics failed" },
      { status: 500 }
    );
  }
}