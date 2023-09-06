require("dotenv").config(); //cpmmon js
const express = require("express"); //import express, commonjs
// import express form 'express'; //es modules
const path = require("path"); //common js

const app = express(); //create express application
const port = process.env.PORT || 8888; // init port
console.log(process.env);

const hostname = process.env.HOST_NAME;
//config template engine
app.set("views", path.join(__dirname, "views/"));
app.set("view engine", "ejs");

//khai bao routes
//req and res are 2 objects in Nodejs environment
app.get("/", (req, res) => {
  res.send("Hello World with van nguyen and Nodemon!");
});

app.get("/abc", (req, res) => {
  res.send("Chec ABC");
});

app.get("/vanguyendev", (req, res) => {
  // res.send("<h1>vanguyendev</h1>");
  res.render("sample.ejs");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
