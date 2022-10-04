const { Pool } = require("pg");
const fs = require("fs");

const queryDb = async (filepath) => {
  const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "atsu0301",
    port: 5432,
  });
  console.log(pool);
  const queryFile = fs.readFileSync(filepath, "utf8");
  const res = await pool.query(queryFile);
  pool.end();
  return res;
};

module.exports = { queryDb };
