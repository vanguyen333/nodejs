const express = require("express");
const {
  getHomepage,
  getABC,
  getHoiDanIT,
} = require("../controllers/homeController");
const router = express.Router();

//req and res are 2 objects in Nodejs environment
//router.method('/route',handler)
router.get("/", getHomepage);

router.get("/abc", getABC);

router.get("/hoidanit", getHoiDanIT);

module.exports = router; //export default
