const Sequelize = require("sequelize");
const dotenv = require("dotenv");
const rating = require("./RatingModel");
const category = require("./CategoryModel");
const blog = require("./BlogModel");
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
db.category = category(sequelize, Sequelize);
db.blog = blog(sequelize, Sequelize);
db.commenter = commenter(sequelize, Sequelize);

// associations
db.blog.hasOne(db.commenter, {
  onDelete: "cascade",
  onUpdate: "cascade",
});

db.blog.hasMany(db.rating, {
  onDelete: "cascade",
  onUpdate: "cascade",
});

db.category.hasMany(db.blog, {
  onDelete: "cascade",
  onUpdate: "cascade",
});

db.commenter.belongsTo(db.blog);
db.rating.belongsTo(db.blog);

module.exports = db;
