import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function POST(req: Request) {

  try {

    const { caseId, lawyerId } = await req.json();

    if (!caseId || !lawyerId) {
      return NextResponse.json(
        { success:false, message:"Missing caseId or lawyerId"},
        { status:400 }
      );
    }

    await query(`
      UPDATE cases
      SET assigned_lawyer=$1,
          status='ASSIGNED'
      WHERE id=$2
    `,[lawyerId,caseId]);

    /* GET LAWYER NAME */

    const lawyer = await query(`
      SELECT full_name
      FROM users
      WHERE id=$1
    `,[lawyerId]);

    return NextResponse.json({
      success:true,
      lawyerName:lawyer.rows[0].full_name
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      { success:false, message:"Assignment failed"},
      { status:500 }
    );
  }
}