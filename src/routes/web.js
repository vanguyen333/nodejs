const express = require("express");

const router = express.Router();

//req and res are 2 objects in Nodejs environment
router.get("/", (req, res) => {
  res.send("Hello World with van nguyen and Nodemon!");
});

router.get("/abc", (req, res) => {
  res.send("Chec ABC");
});

router.get("/vanguyendev", (req, res) => {
  // res.send("<h1>vanguyendev</h1>");
  res.render("sample.ejs");
});

module.exports = router; //export default
