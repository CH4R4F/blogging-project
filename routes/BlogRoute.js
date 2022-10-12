const express = require("express");
const router = express.Router();
const { getAll, createArticle, deleteArticle, updateArticle, getBlogById } = require("../controllers/BlogController");
const {getAll: getAllCommenter} = require("../controllers/CommenterController")
const {getAllCategories} = require("../controllers/CategoryController")

// router.get("/", async (req, res) => {
//   const data = await getAll(req, res);
//   const categories = await getAllCategories(req, res);
//   res.json({
//     data: data,
//     categories: categories,
//   });
// });

router.get("/:id", async (req, res) => {
  const blog = await getBlogById(req, res);
  const comments = await getAllCommenter(req, res);
  res.render("blogPost", { blog, comments });
});

router.post("/add", createArticle);

router.delete("/delete/:id", deleteArticle);

router.put("/edit/:id", updateArticle);

router.delete("/delete/:id", deleteArticle);

module.exports = router;
