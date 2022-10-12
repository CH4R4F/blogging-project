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
