// C:\xampp\htdocs\SCPSF\app\api\work-items\route.ts
import { NextResponse } from "next/server";
import { query } from "../../../lib/db"; // <-- relative path

export async function GET() {
  try {
    const result = await query("SELECT * FROM work_items ORDER BY id ASC");
    return NextResponse.json(result.rows);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch work items" }, { status: 500 });
  }
}