import { NextResponse } from "next/server";
import { query } from "../../../lib/db";

export async function GET() {
  const result = await query("SELECT * FROM legal_aid_requests ORDER BY id DESC");

  return NextResponse.json(result.rows);
}