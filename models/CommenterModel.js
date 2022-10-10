module.exports = (sequelize, Sequelize) => {
    const commenter = sequelize.define("commenter", {
        commenter: {
            type: Sequelize.TEXT,
        },
    })
    return commenter;
}