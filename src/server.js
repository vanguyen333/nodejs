const express = require("express"); //import express, commonjs
// import express form 'express'; //es modules
const path = require("path"); //common js

const app = express(); //create express application
const port = 8081; // init port ==> hardcode

//config template engine
app.set("views", path.join(__dirname, "views/"));
app.set("view engine", "ejs");

//khai bao routes
//req and res are 2 objects in Nodejs environment
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/abc", (req, res) => {
  res.send("Chec ABC");
});

app.get("/vanguyendev", (req, res) => {
  // res.send("<h1>vanguyendev</h1>");
  res.render("sample.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
