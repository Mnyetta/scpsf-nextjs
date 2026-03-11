"use server";

import { NextResponse } from "next/server";
import { query } from "../../../lib/db";

export async function POST(req: Request) {
  const { caseId, lawyerId } = await req.json();

  // Attempt to assign the lawyer only if the case is unassigned
  const result = await query(
    `UPDATE cases 
     SET assigned_lawyer=$1, status='ASSIGNED'
     WHERE id=$2 AND assigned_lawyer IS NULL
     RETURNING *`,
    [lawyerId, caseId]
  );

  if (result.rows.length === 0) {
    return NextResponse.json(
      { error: "Case already assigned" },
      { status: 400 }
    );
  }

  return NextResponse.json({ success: true, case: result.rows[0] });
}