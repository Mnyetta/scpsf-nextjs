import { NextResponse } from "next/server";
import { pool } from "@/lib/db_connection";

export async function GET() {

  const result = await pool.query(`
    SELECT
      COUNT(*) FILTER (WHERE status='PENDING') as pending,
      COUNT(*) FILTER (WHERE status='ASSIGNED') as assigned,
      COUNT(*) FILTER (WHERE status='CLOSED') as finalized
    FROM cases
  `);

  const stats = result.rows[0];

  return NextResponse.json({
    pending: Number(stats.pending),
    assigned: Number(stats.assigned),
    finalized: Number(stats.finalized)
  });
}