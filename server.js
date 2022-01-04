//Modules and Globals
require("dotenv").config();
const express = require("express");
const app = express();

// Express Settings
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));

// import the controls and router
app.use("/places", require("./controllers/places-control"));

//Home
app.get("/", (req, res) => {
  res.render("home");
});

// 404 Needs to be at bottom
app.get("*", (req, res) => {
  res.render("error404");
});

app.listen(process.env.PORT);
