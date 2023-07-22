import { pool } from "./index.js";

export async function createUserTable() {
    await pool.query(
      "CREATE TABLE users(id INT GENERATED ALWAYS AS IDENTITY, email VARCHAR, password VARCHAR, firstname VARCHAR, lastname VARCHAR, address VARCHAR, school VARCHAR)"
    );
  }
  
  /**
   * call the function once to created in the elephantSQL
   */
  
  // try {
  //   createUserTable();
  // } catch (error) {
  //   console.log(error);
  // } finally {
  //   await pool.end();
  // }