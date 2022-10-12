const db = require("../models");
const commenter = db.commenter;

exports.getAll = async (req, res) => {
  const { id } = req.params;
  const data = await commenter.findAll({
    where: {
      articleId: id,
    },
  });

  return data;
};

exports.saveComment = async (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;
  const { username } = req.body;

  const data = await commenter.create({
    commenter: comment,
    user: username,
    articleId: id,
  });

  res.send({
    success: true,
    data,
  });
};
