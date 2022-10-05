module.exports = (sequelize, Sequelize) => {
  const Rating = sequelize.define("rating", {
    articleId: {
      type: Sequelize.INTEGER,
    },
    userId: {
      type: Sequelize.INTEGER,
    },
    rating: {
      type: Sequelize.INTEGER,
    },
  });

  return Rating;
};
