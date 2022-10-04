const express = require("express");
const ejsLayouts = require("express-ejs-layouts");
const dotenv = require("dotenv");
const categoryRoutes = require("./routes/CategoryRoutes")
const db = require("./models/");
const RatingRoutes = require("./routes/RatingRoute");

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
    console.log("error connecting to db");
  });

// routes
app.use("/rates", RatingRoutes);
app.use("/category", categoryRoutes)
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`You are running blog app on port ${port}`);
});