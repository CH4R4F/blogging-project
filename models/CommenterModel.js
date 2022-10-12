module.exports = (sequelize, Sequelize) => {
  const commenter = sequelize.define("commenter", {
    user: {
      type: Sequelize.STRING,
    },
    commenter: {
      type: Sequelize.TEXT,
    },
  });
  return commenter;
};
