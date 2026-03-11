import { query } from "@/lib/db";

export async function GET() {
  // Total stats
  const totalCases = await query(`SELECT COUNT(*) FROM cases`);
  const pendingReview = await query(`SELECT COUNT(*) FROM cases WHERE status='PENDING'`);
  const lawyers = await query(`SELECT COUNT(*) FROM users WHERE role='LAWYER'`);
  const prisoners = await query(`SELECT COUNT(*) FROM users WHERE role='PRISONER'`);

  // Cases by month (last 6 months)
  const casesByMonth = await query(`
    SELECT TO_CHAR(created_at, 'Mon') AS month, COUNT(*) AS total
    FROM cases
    WHERE created_at >= NOW() - INTERVAL '6 months'
    GROUP BY month
    ORDER BY MIN(created_at)
  `);

  // Lawyer workload
  const lawyerWorkload = await query(`
    SELECT u.full_name AS lawyer, COUNT(c.id) AS cases
    FROM cases c
    JOIN users u ON u.id = c.assigned_lawyer
    WHERE u.role='LAWYER'
    GROUP BY u.full_name
  `);

  return new Response(
    JSON.stringify({
      totalCases: parseInt(totalCases.rows[0].count),
      pendingReview: parseInt(pendingReview.rows[0].count),
      lawyers: parseInt(lawyers.rows[0].count),
      prisoners: parseInt(prisoners.rows[0].count),
      casesByMonth: casesByMonth.rows.map((r: any) => ({ month: r.month, total: parseInt(r.total) })),
      lawyerWorkload: lawyerWorkload.rows.map((r: any) => ({ lawyer: r.lawyer, cases: parseInt(r.cases) }))
    }),
    { status: 200 }
  );
}