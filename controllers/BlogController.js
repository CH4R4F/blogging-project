const db = require("../models");
const blog = db.blog;

exports.getAll = async (req, res) => {
  const blogs = await blog.findAll({});
  return blogs;
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

  const data = await blog.create({
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

exports.deleteArticle = async (req, res) => {
  const id = req.params.id;
  const data = await blog.destroy({
    where: {
      id: id,
    },
  });

  res.send({
    success: true,
    message: "Article deleted successfully",
    data: data,
  });
};

exports.updateArticle = async (req, res) => {
  const id = req.params.id;
  const data = await blog.update(
    {
      article_title: req.body.title,
      category: req.body.category,
      article_content: req.body.content,
    },
    {
      where: {
        id: id,
      },
    }
  );

  res.send({
    success: true,
    message: "Article updated successfully",
    data: data,
  });
};

exports.getBlogById = async (req, res) => {
  const id = req.params.id;
  const data = await blog.findOne({
    where: {
      id: id,
    },
  });
  console.log(data);
  return data;
};

exports.getCount = async (req, res) => {
  const count = await blog.count();
  return count;
};
