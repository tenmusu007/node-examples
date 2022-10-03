const { Pool } = require("pg");
const fs = require("fs");

const queryDb = async (filepath) => {
  const pool = new Pool({
    user: "arthurdilascio",
    host: "localhost",
    database: "week_assignment",
    password: "",
    port: 5432,
  });
  //   const res = await pool.query(sql.file(`queries/${filename}`));
  const queryFile = fs.readFileSync(filepath, "utf8");
  //   console.log("query", queryFile);
  const res = await pool.query(queryFile);
  pool.end();
  //   console.log("res", res);
  return res;
};

module.exports = { queryDb };
