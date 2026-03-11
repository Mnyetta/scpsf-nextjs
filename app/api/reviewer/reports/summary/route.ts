//C:\xampp\htdocs\SCPSF\app\api\reviewer\reports\summary\route.ts
import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET() {
  try {

    const result = await query(`
      SELECT
        COUNT(*) FILTER (WHERE status = 'PENDING') AS pending,
        COUNT(*) FILTER (WHERE status = 'ASSIGNED') AS attended,
        COUNT(*) FILTER (WHERE status = 'CLOSED') AS finalized
      FROM cases
    `);

    return NextResponse.json(result.rows[0]);

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to generate report" },
      { status: 500 }
    );
  }
}