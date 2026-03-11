import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function POST(req: Request) {
  const body = await req.json();

  const {
    prisoner_name,
    prison,
    prison_number,
    guardian_name,
    guardian_contact,
    case_status,
    case_summary,
    court_region,
    case_tracking,
  } = body;

  try {
    await query(
      `INSERT INTO cases
      (crime_details, prisoner_name, prison_number, guardian_name, guardian_contact, status, case_summary, prison_name, prison_location, original_case_no)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,
      [
        "Not specified", // crime_details required
        prisoner_name,
        prison_number,
        guardian_name,
        guardian_contact,
        case_status || "PENDING",
        case_summary,
        prison,         // prison_name
        court_region,   // prison_location
        case_tracking,  // original_case_no
      ]
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("DB insert error:", err);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}