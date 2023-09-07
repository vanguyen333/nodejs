require("dotenv").config(); //cpmmon js
const express = require("express"); //import express, commonjs
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const mysql = require("mysql2");

const app = express(); //create express application
const port = process.env.PORT || 8888; // init port
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//khai bao routes
app.use("/", webRoutes);

//test connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3307, //default:3306
  user: "root",
  password: "123456", //default: empty
  database: "hoidanit",
});

//simple query
connection.query("SELECT * from Users u", function (err, results, fields) {
  console.log(">>>results=", results); // results contains rows returned by server
  console.log(">>>fields=", fields); // fields contains extra meta data about results, if available
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
