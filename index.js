const express = require("express");
const ejsLayouts = require("express-ejs-layouts");
const dotenv = require("dotenv");
const categoryRoutes = require("./routes/CategoryRoutes");
const db = require("./models/");
const RatingRoutes = require("./routes/RatingRoute");
const blogRoutes = require("./routes/BlogRoute");
const homeRoutes = require("./routes/HomeRoutes");
const dashboardRoutes = require("./routes/DashboardRoutes");
const CommenterRoutes = require("./routes/CommenterRoute");
const fileUpload = require("express-fileupload");

const app = express();
dotenv.config();
app.use(express.json());
app.use(
  fileUpload({
    createParentPath: true,
  })
);

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
    console.log("error connecting to db" + err);
  });

// home routes
app.use("/", homeRoutes);
//Category Route
app.use("/category", categoryRoutes);
// Dashboard Routes
app.use("/dashboard", dashboardRoutes);
// commenter Routes
app.use("/comment", CommenterRoutes);
//Blog Route
app.use("/blog", blogRoutes);
//Rating Route
app.use("/rates", RatingRoutes);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`You are running blog app on port ${port}`);
});
