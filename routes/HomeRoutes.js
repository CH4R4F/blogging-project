const express = require("express");
const router = express.Router();
// include blog model
const db = require("../models");
const blog = db.blog;

router.get("/", async (req, res) => {
  const blogs = await blog.findAll({});
  res.render("index", {
    blogs: blogs,
  });
});

module.exports = router
