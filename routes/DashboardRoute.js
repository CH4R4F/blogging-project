const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("dashboard");
});

router.post("/addarticle", (req, res) => {
    res.render("dashboard");
});

module.exports = router;