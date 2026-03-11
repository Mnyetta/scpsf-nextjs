import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { caseId, lawyerId } = await req.json();

    if (!caseId || !lawyerId) {
      return NextResponse.json(
        { error: "Missing caseId or lawyerId" },
        { status: 400 }
      );
    }

    // Update case with UUID values
    const result = await query(
      `UPDATE cases
       SET status = 'ASSIGNED',
           assigned_lawyer = $1
       WHERE id = $2
       RETURNING id`,
      [lawyerId, caseId]
    );

    if (result.rowCount === 0) {
      return NextResponse.json(
        { error: "Case not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Case assigned successfully"
    });

  } catch (error) {
    console.error("Assignment Error:", error);

    return NextResponse.json(
      { error: "Assignment failed" },
      { status: 500 }
    );
  }
}