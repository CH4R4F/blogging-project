const Sequelize = require("sequelize");
const dotenv = require("dotenv");
const rating = require("./RatingModel");
const article = require("./ArticleModel");
const commenter = require("./CommenterModel");

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: "localhost",
    dialect: "mysql",
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.rating = rating(sequelize, Sequelize);
db.article = article(sequelize, Sequelize);
db.commenter = commenter(sequelize, Sequelize);

module.exports = db;