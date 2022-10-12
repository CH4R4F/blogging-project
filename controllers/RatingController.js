const db = require("../models");
const rating = db.rating;

exports.create = async (req, res) => {
  // Validate request
  if (!req.body.articleId) {
    res.status(400).send({
      message: "No articleId provided!",
    });
    return;
  }

  if (!req.body.rate) {
    res.status(400).send({
      message: "No rating provided!",
    });
    return;
  }

  // Create a Rating
  const rateInfo = {
    articleId: req.body.articleId,
    rating: req.body.rate,
    userId: req.body.userId,
  };

  // // Save Rating in the database
  // rating
  //   .create(rateInfo)
  //   .then((data) => {
  //     res.send({
  //       success: true,
  //     });
  //   })
  //   .catch((err) => {
  //     res.status(500).send({
  //       message: err.message || "Some error occurred while creating the Rating.",
  //     });
  //   });
  // check if user has already rated the article
  const data = await rating.findAll({
    where: {
      articleId: req.body.articleId,
      userId: req.body.userId,
    },
  });

  if (data.length > 0) {
    // update the rating
    const id = data[0].id;
    rating
      .update(rateInfo, {
        where: {
          id: id,
        },
      })
      .then((data) => {
        res.send({
          success: true,
        });
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the Rating.",
        });
      });
  } else {
    // create the rating
    rating
      .create(rateInfo)
      .then((data) => {
        res.send({
          success: true,
        });
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the Rating.",
        });
      });
  }

};

exports.getAll = async (req, res) => {
  const { userId, articleId } = req.params;

  const data = await rating.findAll({
    where: {
      userId: userId,
      articleId: articleId,
    },
  });

  res.send(data);
};
