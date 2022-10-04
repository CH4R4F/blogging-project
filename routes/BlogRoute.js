const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("stars");
});

module.exports = router;
