import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req:Request){

  const { caseId, lawyerId, reviewerId } = await req.json();

  await query(

    `UPDATE cases
     SET assigned_lawyer=$1,
         assigned_by=$2,
         status='ASSIGNED'
     WHERE id=$3`,

    [lawyerId,reviewerId,caseId]

  );

  return NextResponse.json({ success:true });

}