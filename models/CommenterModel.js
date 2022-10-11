module.exports = (sequelize, Sequelize) => {
    const commenter = sequelize.define("commenter", {
        commenter_article: {
            type: Sequelize.TEXT,
        }
    })
    return commenter;
}