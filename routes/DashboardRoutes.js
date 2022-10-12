const express = require("express");
const router = express.Router();
const { getCount, getAll, getBlogById } = require("../controllers/BlogController");

router.get("/article/add", (req, res) => {
  res.render("dashboard/addArticle");
});

router.get("/", async (req, res) => {
  const blogsCount = await getCount(req, res);

  res.render("dashboard", {
    blogsCount: blogsCount,
    layout: "dashboardLayout",
  });
});

router.get("/blogs", async (req, res) => {
  const blogs = await getAll(req, res);
  res.render("dashboardArticles", { layout: "dashboardLayout", blogs: blogs });
});

router.get("/blogs/new", async (req, res) => {
  res.render('addArticle', {
    layout: "dashboardLayout"
  })
})

router.get("/blogs/:id", async (req, res) => {
  const data = await getBlogById(req, res)
  res.render("dashboardArticleEdit", { layout: "dashboardLayout", blog: data });
})

module.exports = router;
