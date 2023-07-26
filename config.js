const mysql = require("mysql2");
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "feedback",
  port: 3306,
});

module.exports = { db };
