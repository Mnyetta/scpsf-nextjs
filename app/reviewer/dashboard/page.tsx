import ReviewerDashboard from "./ReviewerDashboard";

async function getCases() {
  const res = await fetch("http://localhost:3000/api/reviewer/cases", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Page() {
  const cases = await getCases();

  return <ReviewerDashboard initialCases={cases} />;
}