const express = require("express");
const router = express.Router();
const { getAll, saveComment } = require("../controllers/CommenterController");

router.get("/", getAll);

router.post("/add/:id", saveComment)

module.exports = router;
