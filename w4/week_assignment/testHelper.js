const { Pool } = require("pg");
const fs = require("fs");

const queryDb = async (filepath) => {
  const pool = new Pool({
    user: "postgres",
<<<<<<< HEAD
    host: "localhost",
    database: "postgres",
    password: "atsu0301",
=======
    host: "database-2.czyfev8kcq28.us-east-1.rds.amazonaws.com",
    database: "schooldb",
    password: "postgres123!",
>>>>>>> e275181d6a1144638444030169bcbeb1a82af125
    port: 5432,
  });
  console.log(pool);
  const queryFile = fs.readFileSync(filepath, "utf8");
  const res = await pool.query(queryFile);
  pool.end();
  return res;
};

module.exports = { queryDb };
