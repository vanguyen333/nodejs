const getHomepage = (req, res) => {
  //process data
  //call model
  res.send("Hello World with vanguyendev and nodemon");
};

const getABC = (req, res) => {
  res.send("check ABC");
};

const getHoiDanIT = (req, res) => {
  res.render("sample.ejs");
};

module.exports = { getHomepage, getABC, getHoiDanIT };
