let mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1533618",
  database: "founds",
});

module.exports = db;
