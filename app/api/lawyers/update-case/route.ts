// app/api/lawyer/update-case/route.ts
import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import fs from "fs";
import path from "path";
import jwt from "jsonwebtoken";

export async function PATCH(req: Request) {
  try {
    const formData = await req.formData();

    const caseId = formData.get("caseId")?.toString();
    const lawyerNotes = formData.get("lawyerNotes")?.toString() || "";
    const closureReason = formData.get("closureReason")?.toString() || ""; // optional
    const uploadFolder = formData.get("uploadFolder")?.toString() || "judgements";
    const status = formData.get("status")?.toString() || "PENDING";
    const file = formData.get("document") as File | null;

    if (!caseId) return NextResponse.json({ success: false, error: "Missing caseId" }, { status: 400 });

    const token = req.headers.get("authorization")?.split(" ")[1];
    const decoded: any = token ? jwt.verify(token, process.env.JWT_SECRET!) : null;
    const lawyerId = decoded?.id;

    let documentPath: string | null = null;

    if (file && file.name) {
      const folderPath = path.join(process.cwd(), "public", "lawyers-uploads", uploadFolder);
      if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath, { recursive: true });

      const fileName = `${Date.now()}_${file.name}`;
      const fullPath = path.join(folderPath, fileName);

      const buffer = Buffer.from(await file.arrayBuffer());
      fs.writeFileSync(fullPath, buffer);

      documentPath = `/lawyers-uploads/${uploadFolder}/${fileName}`;
    }

    // Build dynamic update query
    const updateQuery = `
      UPDATE cases
      SET status=$1,
          lawyer_notes=$2,
          lawyer_updated_at=NOW(),
          ${documentPath ? `uploaded_document_path='${documentPath}',` : ""}
          assigned_lawyer=$3
      WHERE id=$4
      RETURNING *;
    `;

    const result = await query(updateQuery, [status, lawyerNotes, lawyerId, caseId]);

    return NextResponse.json({ success: true, case: result.rows[0] });
  } catch (err) {
    console.error("Update case error:", err);
    return NextResponse.json({ success: false, error: "Failed to update case" }, { status: 500 });
  }
}