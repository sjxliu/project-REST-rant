//Modules and Globals
require("dotenv").config();
const express = require("express");
const app = express();
const methOverride = require("method-override");
const port = process.env.PORT



// Express Settings Middleware
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.urlencoded({ extended: true }));
app.use(methOverride("_method"));

//Assets
app.use(express.static("public"));
//allows us to access public folder

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

app.listen(port, () => {
  console.log(`Port ${port} has risen`)
})