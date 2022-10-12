const express = require("express");
const router = express.Router();
const { getAll } = require("../controllers/CommenterController");

router.get("/", getAll);

module.exports = router;
