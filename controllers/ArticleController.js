const db = require("../models");
const article = db.article;

exports.getAll = async (req, res) => {
  const data = await article.findAll();

  return data;
};

exports.createArticle = async (req, res) => {
  const image = req?.files?.image;

  if (!image) {
    res.send({
      success: false,
      message: "No file uploaded",
    });
    return;
  }
  const rootPath = process.cwd();
  image.mv(`${rootPath}/public/images/${image.name}`);

  const data = await article.create({
    article_title: req.body.title,
    category: req.body.category,
    article_content: req.body.content,
    article_image: image.name,
  });

  res.send({
    success: true,
    message: "Article created successfully",
    data: data,
  });
};
