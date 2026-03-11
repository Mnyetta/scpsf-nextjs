import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const result = await query(
      `SELECT id, full_name, email, role, password_hash
       FROM users
       WHERE email=$1`,
      [email]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const user = result.rows[0];

    // simple password check (later use bcrypt)
    if (password !== "admin123") {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    return NextResponse.json({
      id: user.id,
      name: user.full_name,
      role: user.role,
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Login error" },
      { status: 500 }
    );
  }
}