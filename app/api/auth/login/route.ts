import { query } from "@/lib/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ message: "Email and password required" }, { status: 400 });
    }

    const result = await query(
      "SELECT id, full_name, email, password_hash, role FROM users WHERE email=$1",
      [email]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const user = result.rows[0];
    const valid = await bcrypt.compare(password, user.password_hash);

    if (!valid) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
        full_name: user.full_name,
      },
      process.env.JWT_SECRET!,
      { expiresIn: "1d" }
    );

    // Set token in HTTP-only cookie
    const response = NextResponse.json({
      id: user.id,
      role: user.role,
      full_name: user.full_name,
    });

    response.cookies.set({
      name: "token",
      value: token,
      httpOnly: true,
      path: "/",        // available across entire site
      maxAge: 24 * 60 * 60, // 1 day
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production", // only over HTTPS in prod
    });

    return response;

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}