import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

export async function POST(req) {
  const { query } = await req.json();

  if (!query) {
    return NextResponse.json({ error: "Query is required" }, { status: 400 });
  }

  const res = await pool.query("SELECT * FROM legal_guidance");
  const rows = res.rows;

  const lowerQuery = query.toLowerCase();

  // Simple keyword match
  const match = rows.find((row) =>
    row.question_keywords
      .split(",")
      .some((kw) => lowerQuery.includes(kw.trim().toLowerCase()))
  );

  if (!match) {
    return NextResponse.json({
      answer_en:
        "We could not find an exact answer, but consult a lawyer for guidance.",
      answer_sw:
        "Hatuwezi kupata jibu kamili, lakini wasiliana na wakili kwa mwongozo.",
    });
  }

  return NextResponse.json({
    answer_en: match.answer_en,
    answer_sw: match.answer_sw,
  });
}