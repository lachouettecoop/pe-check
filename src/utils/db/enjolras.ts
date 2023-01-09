import mariadb from "mariadb";

console.log("process.env.DB_ENJOLRAS_HOST", process.env.DB_ENJOLRAS_HOST);

const pool = mariadb.createPool({
  host: process.env.DB_ENJOLRAS_HOST,
  database: process.env.DB_ENJOLRAS_DB_NAME,
  user: process.env.DB_ENJOLRAS_USER,
  password: process.env.DB_ENJOLRAS_PASSWORD,
  port: Number.parseInt(process.env.DB_ENJOLRAS_PORT, 10),
  connectionLimit: 5,
});

export const hasUsersHasVoted = async (userEmails) => {
  console.log("process.env.DB_ENJOLRAS_HOST", process.env.DB_ENJOLRAS_HOST);

  let conn;
  try {
    conn = await pool.getConnection();
    return await conn.query(
      "SELECT u.id, u.email FROM enjolras.user u  LEFT JOIN enjolras.vote v on v.user_id = u.id  WHERE u.email in (?) GROUP BY u.id;",
      userEmails
    );
  } finally {
    if (conn) conn.release();
  }
};
