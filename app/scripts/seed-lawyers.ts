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
    { full_name: "Advocate Mary Maliga", email: "mary@gmail.com" },
    { full_name: "Alice Nyerere", email: "alice@lawfirm.tz" },
    { full_name: "John Mwandu", email: "john@lawfirm.tz" },
    { full_name: "Fatuma Kileo", email: "fatuma@lawfirm.tz" },
    { full_name: "David Mushi", email: "david@lawfirm.tz" },
    { full_name: "Rose Wambura", email: "rose@lawfirm.tz" },
  ];

  for (const lawyer of lawyers) {
    await client.query(
      `INSERT INTO users (id, full_name, email, password_hash, role)
       VALUES (uuid_generate_v4(), $1, $2, $3, 'LAWYER')`,
      [lawyer.full_name, lawyer.email, hash]
    );
    console.log(`Inserted: ${lawyer.email}`);
  }

  await client.end();
  console.log("Lawyer seeding complete.");
}

seedLawyers();