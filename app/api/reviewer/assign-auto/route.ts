import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function POST(req: Request) {

  try {

    const { caseId } = await req.json();

    /* GET LAWYER WITH LOWEST WORKLOAD */

    const result = await query(`
      SELECT
        u.id,
        COUNT(c.id) as workload
      FROM users u
      LEFT JOIN cases c
        ON c.assigned_lawyer = u.id
        AND c.status IN ('ASSIGNED','IN_PROGRESS')
      WHERE u.role='LAWYER'
      GROUP BY u.id
      ORDER BY workload ASC
      LIMIT 1
    `);

    if(!result.rows[0]){
      return NextResponse.json({
        success:false,
        message:"No lawyer available"
      });
    }

    const lawyerId = result.rows[0].id;

    await query(`
      UPDATE cases
      SET assigned_lawyer=$1,
          status='ASSIGNED'
      WHERE id=$2
    `,[lawyerId,caseId]);

    return NextResponse.json({
      success:true,
      lawyerId
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      { success:false, message:"Auto assign failed"},
      { status:500 }
    );
  }
}