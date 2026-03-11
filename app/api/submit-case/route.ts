import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const {
      prisonerName,
      prisonerID,
      crimeDetails,
      guardianName,
      guardianContact,
      originalCaseNo,
      originalCaseRefNo,
      originalCourt,
      prisonName,
      prisonLocation,
      admissionOffice,
      dateOfImprisonment
    } = body;

    if (!prisonerName || !prisonerID || !crimeDetails) {

      return NextResponse.json(
        { success: false, message: "Required fields missing" },
        { status: 400 }
      );

    }

    const caseSummary = `
Prisoner ${prisonerName} (ID: ${prisonerID})
Crime: ${crimeDetails}
Guardian: ${guardianName}
Contact: ${guardianContact}
Date of imprisonment: ${dateOfImprisonment}
`;

    const result = await query(

      `INSERT INTO cases
      (prisoner_name, prison_number, crime_details, guardian_name,
       guardian_contact, case_summary, original_case_no,
       original_case_ref_no, original_court, prison_name,
       prison_location, admission_office, date_of_imprisonment, created_at)

      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,NOW())

      RETURNING *`,

      [
        prisonerName,
        prisonerID,
        crimeDetails,
        guardianName,
        guardianContact,
        caseSummary,
        originalCaseNo,
        originalCaseRefNo,
        originalCourt,
        prisonName,
        prisonLocation,
        admissionOffice,
        dateOfImprisonment
      ]

    );

    return NextResponse.json({
      success: true,
      message: "Case submitted successfully",
      data: result.rows[0],
    });

  } catch (error) {

    console.error("Submit case error:", error);

    return NextResponse.json(
      { success: false, message: "Database error" },
      { status: 500 }
    );

  }
}