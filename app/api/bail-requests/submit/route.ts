import { NextResponse } from "next/server";
import { pool } from "@/lib/db_connection";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prisoner_id, reason } = body;

    if (!prisoner_id || !reason) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const res = await pool.query(
      "INSERT INTO bail_requests (prisoner_id, reason) VALUES ($1, $2) RETURNING *",
      [prisoner_id, reason]
    );

    return NextResponse.json({ success: true, bailRequest: res.rows[0] });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}