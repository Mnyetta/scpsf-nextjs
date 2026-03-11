import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import jwt from "jsonwebtoken";

export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader) {
      return NextResponse.json({ error: "Unauthorized – missing token" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    if (!token) return NextResponse.json({ error: "Unauthorized – invalid token" }, { status: 401 });

    const secret = process.env.JWT_SECRET!;
    const decoded = jwt.verify(token, secret) as { id: string; full_name: string; role: string };
    const userId = decoded.id;

    const result = await query(
      `
      SELECT c.id, c.case_summary, c.status, c.created_at, c.prisoner_name,
             c.prison_number, c.guardian_name, c.guardian_contact, c.lawyer_notes,
             u.full_name AS lawyer_name
      FROM cases c
      LEFT JOIN users u ON c.assigned_lawyer = u.id
      WHERE c.assigned_lawyer = $1
      ORDER BY c.created_at DESC
      `,
      [userId]
    );

    return NextResponse.json({
      cases: result.rows || [],
      lawyerName: decoded.full_name,
      role: decoded.role
    });

  } catch (err) {
    console.error("Failed to fetch assigned cases:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}