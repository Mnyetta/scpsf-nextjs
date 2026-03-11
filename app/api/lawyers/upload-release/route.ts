import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import path from "path";
import fs from "fs";

export async function POST(req: Request) {
  try {

    const formData = await req.formData();
    const file = formData.get("file") as File;
    const caseId = formData.get("caseId") as string;
    const userId = formData.get("userId") as string;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const releaseDir = path.join(process.cwd(), "public", "release");

    if (!fs.existsSync(releaseDir)) {
      fs.mkdirSync(releaseDir, { recursive: true });
    }

    const fileName = `${Date.now()}_${file.name}`;
    const filePath = path.join(releaseDir, fileName);

    fs.writeFileSync(filePath, buffer);

    await query(
      `INSERT INTO case_releases
       (case_id, file_name, file_path, uploaded_by)
       VALUES ($1, $2, $3, $4)`,
      [caseId, fileName, `/release/${fileName}`, userId]
    );

    await query(
      `UPDATE cases SET status='CLOSED' WHERE id=$1`,
      [caseId]
    );

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Upload failed" },
      { status: 500 }
    );
  }
}