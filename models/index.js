import { pool } from "../db/index.js";

export async function addNewUsers(users) {
    console.log(users)
    const res = await pool.query(
      `INSERT INTO users (email, password, firstname, lastname, address, school) VALUES ($1, $2, $3, $4, $5, $6) RETURNING*;`,
      [users.email, users.password, users.firstname, users.lastname, users.address, users.school]
    );
    return res.rows;
  }