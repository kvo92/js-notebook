import mysql from "mysql";
var con = mysql.createConnection({
  host: "kylebvo.com",
  database: "kylebvoc_password",
  user: "kylebvoc_password_manager",
  password: "dsfscdsfsd",
  port: 3306,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
