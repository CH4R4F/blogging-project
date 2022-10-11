const db = require("../models");
const rating = db.rating;

exports.create = (req, res) => {
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
    userId: req.body.userId,
    articleId: req.body.articleId,
    rating: req.body.rate,
  };

  // Save Rating in the database
  rating
    .create(rateInfo)
    .then((data) => {
      res.send({
        success: true,
        message: "Rating was created successfully!",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Rating.",
      });
    });
};

exports.getAll = (req, res) => {
  const id = req.params.id;

  rating
    .findAll({ where: { articleId: id } })
    .then((data) => {
      res.send({
        success: true,
        message: "Ratings retrieved successfully!",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving ratings.",
      });
    });
};
