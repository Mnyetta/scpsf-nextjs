import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {

    const { prisonNumber } = await req.json();

    const result = await query(
      `SELECT *
       FROM cases
       WHERE prison_number=$1`,
      [prisonNumber]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { message: "No case found" },
        { status: 404 }
      );
    }

    return NextResponse.json(result.rows);

  } catch (error) {

    return NextResponse.json(
      { message: "Error fetching case" },
      { status: 500 }
    );
  }
}