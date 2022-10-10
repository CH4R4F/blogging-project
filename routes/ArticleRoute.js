const express = require("express");
const router = express.Router();
const { getAll, createArticle } = require("../controllers/ArticleController");

router.get("/", async (req, res) => {
  const articles = await getAll(req, res);
  res.render("blogs", { articles });
});

router.post("/add", createArticle);

// router.put("/edit/:id",)

module.exports = router;
