const express = require("express");
const router = express.Router();
const { getAll, createArticle, deleteArticle, updateArticle, getBlogById } = require("../controllers/BlogController");

router.get("/", async (req, res) => {
  const data = await getAll(req, res);

  res.json(data);
});

router.post("/add", createArticle);

router.delete("/delete/:id", deleteArticle);

router.put("/edit/:id", updateArticle);

router.get('/blog/:id', getBlogById)

module.exports = router;
