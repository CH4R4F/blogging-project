const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("starts");
});

router.post("/", (req, res) => {});

module.exports = router;