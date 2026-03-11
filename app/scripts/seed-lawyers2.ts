import bcrypt from "bcrypt";
import { Client } from "pg";

async function seedLawyers() {
  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "scpsf_db",
    password: "admin",
    port: 5432,
  });

  await client.connect();

  const password = "Password123"; // general password for all
  const hash = await bcrypt.hash(password, 10);

  const lawyers = [
    { full_name: "Advocate Daniel", email: "daniel@scpsf.org" },
    { full_name: "Advocate James", email: "james@scpsf.org" },
    { full_name: "Advocate John", email: "lawyer1@scpsf.org" },
    { full_name: "Advocate Mary", email: "mary@scpsf.org" },
    { full_name: "Advocate Mary Maliga", email: "mary@gmail.com" },
    { full_name: "Advocate Sarah", email: "lawyer2@scpsf.org" },
    { full_name: "Alice Nyerere", email: "alice@lawfirm.tz" },
    { full_name: "David Mushi", email: "david@lawfirm.tz" },
    { full_name: "Fatuma Kileo", email: "fatuma@lawfirm.tz" },
    { full_name: "John Mwandu", email: "john@lawfirm.tz" },
    { full_name: "Rose Wambura", email: "rose@lawfirm.tz" },
  ];

  for (const lawyer of lawyers) {
    // Check if the user already exists
    const res = await client.query(
      `SELECT id FROM users WHERE email = $1`,
      [lawyer.email]
    );

    if (res.rows.length > 0) {
      console.log(`Skipped (already exists): ${lawyer.email}`);
      continue;
    }

    // Insert if not exists
    await client.query(
      `INSERT INTO users (id, full_name, email, password_hash, role, created_at)
       VALUES (uuid_generate_v4(), $1, $2, $3, 'LAWYER', NOW())`,
      [lawyer.full_name, lawyer.email, hash]
    );
    console.log(`Inserted: ${lawyer.email}`);
  }

  await client.end();
  console.log("Lawyer seeding complete.");
}

seedLawyers().catch(err => {
  console.error("Seeding failed:", err);
});

//npx ts-node scripts/seedLawyers.ts

//npx ts-node app/scripts/seed-lawyers2.ts