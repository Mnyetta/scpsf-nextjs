import bcrypt from "bcrypt";
import { Client } from "pg";

async function seedUsers() {

  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "scpsf_db",
    password: "admin",
    port: 5432,
  });

  await client.connect();

  const password = "Password123";
  const hash = await bcrypt.hash(password, 10);

  const users = [
    { full_name: "System Administrator", email: "admin@scpsf.org", role: "ADMIN" },
    { full_name: "Case Reviewer", email: "reviewer@scpsf.org", role: "REVIEWER" },
    { full_name: "Advocate John", email: "lawyer1@scpsf.org", role: "LAWYER" },
    { full_name: "Advocate Sarah", email: "lawyer2@scpsf.org", role: "LAWYER" },
    { full_name: "Justice Donor", email: "donor@scpsf.org", role: "DONOR" }
  ];

  for (const user of users) {

    await client.query(
      `INSERT INTO users (full_name,email,password_hash,role)
       VALUES ($1,$2,$3,$4)`,
      [user.full_name, user.email, hash, user.role]
    );

    console.log(`Inserted: ${user.email}`);
  }

  await client.end();

  console.log("User seeding complete.");
}

seedUsers();