const express = require("express");
const router = express.Router();
const { getCount, getAll, getBlogById } = require("../controllers/BlogController");
const { getAllCategories, getCategoryById } = require("../controllers/CategoryController");

router.get("/", async (req, res) => {
  const blogsCount = await getCount(req, res);

  res.render("dashboard", {
    blogsCount: blogsCount,
    layout: "dashboardLayout",
  });
});

router.get("/blogs", async (req, res) => {
  const blogs = await getAll(req, res);
  const categories = await getAllCategories(req, res);
  res.render("dashboardArticles", {
    layout: "dashboardLayout",
    blogs: blogs,
    categories: categories,
  });
});

router.get("/blogs/new", async (req, res) => {
  const categories = await getAllCategories(req, res);
  res.render("addArticle", {
    categories: categories,
    layout: "dashboardLayout",
  });
});

router.get("/blogs/:id", async (req, res) => {
  const data = await getBlogById(req, res);
  res.render("dashboardArticleEdit", { layout: "dashboardLayout", blog: data });
});

router.get("/categories", async (req, res) => {
  const categories = await getAllCategories(req, res);
  res.render("dashboardCategories", {
    layout: "dashboardLayout",
    categories: categories,
  });
});

router.get("/category/new", (req, res) => {
  res.render("addCategory", { layout: "dashboardLayout" });
});

router.get("/category/:id", async (req, res) => {
  const category = await getCategoryById(req, res);
  console.log(category);
  res.render("dashboardCategoryEdit", { layout: "dashboardLayout", category: category });
});

module.exports = router;
