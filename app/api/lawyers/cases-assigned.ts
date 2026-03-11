import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET(req: Request) {
  try {
    // Here we assume you have authentication middleware that sets the lawyer ID
    const userId = req.headers.get("x-user-id"); 
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const result = await query(
      `
      SELECT 
        c.id, c.case_summary, c.status, c.created_at, 
        c.prisoner_name, c.prison_number,
        c.guardian_name, c.guardian_contact, c.lawyer_notes, 
        u.full_name AS lawyer_name
      FROM cases c
      LEFT JOIN users u ON c.assigned_lawyer = u.id
      WHERE c.assigned_lawyer = $1
      ORDER BY c.created_at DESC
      `,
      [userId]
    );

    return NextResponse.json(result.rows);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch assigned cases" },
      { status: 500 }
    );
  }
}