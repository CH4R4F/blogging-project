const express = require("express");
const router = express.Router();
const { getAll, create, remove } = require("../controllers/RatingController");

router.get("/all/:userId/:articleId", getAll);

router.post("/add", (req, res) => {
  create(req, res);
});

module.exports = router;
