import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      full_name,
      email,
      phone,
      prison_name,
      case_description,
    } = body;

    const result = await query(
      `INSERT INTO cases 
      (full_name, email, phone, prison_name, case_description)
      VALUES ($1,$2,$3,$4,$5)
      RETURNING *`,
      [full_name, email, phone, prison_name, case_description]
    );

    return NextResponse.json({
      success: true,
      data: result.rows[0],
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, message: "Failed to submit case" },
      { status: 500 }
    );
  }
}