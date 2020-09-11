var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json("respond with a resource");
});

router.post("/", function (req, res, next) {
  // console.log("req :", req.body.email);

  res.json(req.body.email);
});

module.exports = router;
