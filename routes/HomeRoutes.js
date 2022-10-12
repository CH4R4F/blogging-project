const express = require("express");
const router = express.Router();
// include blog model
const db = require("../models");
const {getAllArticlesToRender} = require("../controllers/BlogController")


router.get("/", getAllArticlesToRender)

module.exports = router
