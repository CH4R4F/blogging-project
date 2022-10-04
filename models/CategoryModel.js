module.exports = (sequelize, Sequelize) => {
    const category = sequelize.define('category', {
        category_name: {
            type: Sequelize.STRING
        }
    })

    return category
}