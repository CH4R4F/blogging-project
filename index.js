const express = require("express");
const ejsLayouts = require("express-ejs-layouts");
const dotenv = require("dotenv");
const categoryRoutes = require("./routes/CategoryRoutes")
const db = require("./models/");
// const RatingRoutes = require("./routes/RatingRoute");
const blogRoutes = require("./routes/BlogRoute")

const app = express();
dotenv.config();
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
  .sync()
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log("error connecting to db" + err);
  });

// routes
//Home Page
app.get("/", (req, res) => {
  res.send("<h1>Hello SAFIA, it's the index page</h1>")
})

//Category page
app.use("/category", categoryRoutes)

//Blog page
app.use("/blog", blogRoutes)
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`You are running blog app on port ${port}`);
});