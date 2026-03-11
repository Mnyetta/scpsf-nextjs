import { NextResponse } from "next/server";
import { query } from "../../../lib/db";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const result = await query(
    "SELECT * FROM lawyers WHERE email=$1 AND password=$2",
    [email, password]
  );

  if (result.rows.length > 0) {
    const lawyer = result.rows[0];

    // Create JWT token
    const token = jwt.sign(
      { id: lawyer.id, email: lawyer.email },
      JWT_SECRET,
      { expiresIn: "8h" }
    );

    return NextResponse.json({ success: true, token, lawyer });
  }

  return NextResponse.json({ error: "Invalid login" }, { status: 401 });
}