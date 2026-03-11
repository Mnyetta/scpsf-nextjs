import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET(){

  try{

    const result = await query(`
      SELECT
      COUNT(*) FILTER (WHERE status='PENDING') as pending,
      COUNT(*) FILTER (WHERE status='ASSIGNED') as assigned,
      COUNT(*) FILTER (WHERE status='COMPLETED') as completed
      FROM cases
    `);

    return NextResponse.json(result.rows[0]);

  }catch(error){

    console.error(error);

    return NextResponse.json(
      {error:"Failed to load stats"},
      {status:500}
    );
  }
}