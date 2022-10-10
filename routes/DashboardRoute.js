const express = require("express");
const router = express.Router();
const { getAll, createArticle } = require("../controllers/ArticleController");

// router.get("/", (req, res) => {
//     res.render("addArticle", {
//         layout: "dashboard",
//     });
// });

router.get("/articles", async (req, res) => {
  const blogs = await getAll(req, res);
  res.render("dashboard/blogs", {
    blogs,
    layout: "dashboard",
  });
});

module.exports = router;
