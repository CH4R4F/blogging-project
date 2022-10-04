const express = require("express");
const ejsLayouts = require("express-ejs-layouts");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

// ejs as a default template engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
// add ejs layout support
app.use(ejsLayouts);
// static files are stored on public filder
app.use(express.static(__dirname + "/public"));

const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`You are running blog app on port ${port}`);
});