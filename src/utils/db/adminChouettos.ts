import mariadb from "mariadb";

const pool = mariadb.createPool({
  host: process.env.DB_ADMIN_HOST,
  database: process.env.DB_ADMIN_DB_NAME,
  user: process.env.DB_ADMIN_USER,
  password: process.env.DB_ADMIN_PASSWORD,
  port: Number.parseInt(process.env.DB_ADMIN_PORT, 10),
  connectionLimit: 5,
});

export const getUsersInPE = async () => {
  let conn;
  try {
    conn = await pool.getConnection();
    return await conn.query(
      "SELECT u.id, u.email FROM adminchouettos.fos_user u WHERE u.periode_essai <> 'NULL';"
    );
  } finally {
    if (conn) conn.release();
  }
};
