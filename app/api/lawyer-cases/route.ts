import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req:Request){

  const { searchParams } = new URL(req.url);

  const lawyerId = searchParams.get("lawyerId");

  const result = await query(

    `SELECT *
     FROM cases
     WHERE assigned_lawyer=$1`,

    [lawyerId]

  );

  return NextResponse.json(result.rows);

}