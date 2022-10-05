module.exports = (sequelize, Sequelize) => {
    const article = sequelize.define("article", {
        article_title: {
            type: Sequelize.STRING,
        },
        article_content: {
            type: Sequelize.TEXT,
        },
        article_image: {
            type: Sequelize.STRING,
        },
    })
    return article;
}