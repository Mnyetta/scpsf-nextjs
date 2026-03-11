import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET() {

  const result = await query(`
    SELECT id, case_summary
    FROM cases
    WHERE status='PENDING'
    AND created_at < NOW() - INTERVAL '14 days'
  `);

  return NextResponse.json(result.rows);

}