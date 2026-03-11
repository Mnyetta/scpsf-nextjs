//C:\xampp\htdocs\SCPSF\lib\db_connection.ts

import { Pool } from "pg";

declare global {
  var __pgPool: Pool | undefined;
}

const pool =
  global.__pgPool ??
  new Pool({
    user: "postgres",
    host: "localhost",
    database: "scpsf_db",
    password: "admin",
    port: 5432,
  });

if (process.env.NODE_ENV !== "production") {
  global.__pgPool = pool;
}

export { pool };