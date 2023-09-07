require("dotenv").config(); //cpmmon js
const mysql = require("mysql2");

//create connection to db
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, //default:3306
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD, //default: empty
  database: process.env.DB_NAME,
});

module.exports = connection;
