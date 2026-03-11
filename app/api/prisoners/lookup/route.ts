import { NextResponse } from "next/server";
import { pool } from "@/lib/db_connection";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const number = searchParams.get("number");

  if (!number) {
    return NextResponse.json({ exists: false });
  }

  try {
    const result = await pool.query(
      "SELECT * FROM prisoners WHERE prison_number = $1 LIMIT 1",
      [number]
    );

    if (result.rows.length > 0) {
      return NextResponse.json({
        exists: true,
        prisoner: result.rows[0],
      });
    }

    return NextResponse.json({ exists: false });

  } catch (error) {
    console.error("Prisoner lookup error:", error);

    return NextResponse.json(
      { error: "Database query failed" },
      { status: 500 }
    );
  }
}