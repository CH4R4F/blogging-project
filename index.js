const express = require("express");
const ejsLayouts = require("express-ejs-layouts");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
const db = require("./models/");
const RatingRoutes = require("./routes/RatingRoute");
const BlogRoutes = require("./routes/BlogRoute");
const ArticleRoutes = require("./routes/ArticleRoute");
const DashboardRoutes = require("./routes/DashboardRoute");
const CommenterRoutes = require("./routes/CommenterRoute");

const app = express();
dotenv.config();
app.use(
    fileUpload({
        createParentPath: true,
    })
);
app.use(express.json());

// ejs as a default template engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
// add ejs layout support
app.use(ejsLayouts);
// static files are stored on public filder
app.use(express.static(__dirname + "/public"));

// conect to db
db.sequelize
    .sync({ alter: true })
    .then(() => {
        console.log("connected to db");
    })
    .catch((err) => {
        console.log("error connecting to db");
    });

// routes
app.use("/rates", RatingRoutes);
app.use("/blog", ArticleRoutes);
app.use("/dashboard", DashboardRoutes);
app.use("/commenter", CommenterRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`You are running blog app on port ${port}`);
});