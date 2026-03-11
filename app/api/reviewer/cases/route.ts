// File: /app/api/reviewer/cases/route.ts
import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET() {
  try {
    const result = await query(`
      SELECT 
        id,
        case_summary,
        status,
        created_at,
        assigned_lawyer,
        lawyer_notes,

        -- Case details
        original_case_no,
        original_case_ref_no,
        original_court,

        -- Prison details
        prison_name,
        prison_location,

        -- NEW FIELDS
        admission_office,
        date_of_imprisonment

      FROM cases
      ORDER BY created_at DESC
    `);

    return NextResponse.json(result.rows);

  } catch (error) {

    console.error("Failed to fetch reviewer cases:", error);

    return NextResponse.json(
      { success: false, message: "Failed to fetch cases" },
      { status: 500 }
    );

  }
}