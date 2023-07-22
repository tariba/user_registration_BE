import pg from "pg";
import * as dotenv from "dotenv";
dotenv.config();

export const databaseUrl = process.env.DATABASE_URL;

export const pool = new pg.Pool({ connectionString: databaseUrl });
