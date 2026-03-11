import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function PATCH(req: Request) {
  try {
    // 1️⃣ Read token from HTTP-only cookie
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    // 2️⃣ Verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      id: string;
      role: string;
      full_name: string;
    };

    // 3️⃣ Read request body
    const { caseId, stepIndex } = await req.json();

    const stepColumns = [
      "step_assignment",
      "step_analysis",
      "step_consultation",
      "step_preparation",
      "step_submission",
      "step_followup",
      "step_closure",
    ];

    const column = stepColumns[stepIndex];

    if (!column) {
      return NextResponse.json(
        { success: false, error: "Invalid step index" },
        { status: 400 }
      );
    }

    // 4️⃣ Update case step
    await query(
      `UPDATE cases
       SET ${column} = 'COMPLETED'
       WHERE id = $1
       AND assigned_lawyer = $2`,
      [caseId, decoded.id]
    );

    // 5️⃣ Fetch updated cases
    const updatedCases = await query(
      `SELECT
        id,
        case_summary,
        status,
        created_at,
        prisoner_name,
        prison_number,
        guardian_name,
        guardian_contact,
        lawyer_notes
      FROM cases
      WHERE assigned_lawyer = $1
      ORDER BY created_at DESC`,
      [decoded.id]
    );

    return NextResponse.json({
      success: true,
      cases: updatedCases.rows,
    });

  } catch (error) {
    console.error("Update case step error:", error);

    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}