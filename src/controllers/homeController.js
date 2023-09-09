const connection = require("../config/database");
const { use } = require("../routes/web");

const getHomepage = (req, res) => {
  let users = [];

  connection.query("SELECT * from Users u", function (err, results, fields) {
    users = results;
    console.log(">>>results home page=", results); // results contains rows returned by server

    // console.log(">>Check users:", users);
    res.send(JSON.stringify(users));
  });
};

const getABC = (req, res) => {
  res.send("check ABC");
};

const getHoiDanIT = (req, res) => {
  res.render("sample.ejs");
};

module.exports = { getHomepage, getABC, getHoiDanIT };
