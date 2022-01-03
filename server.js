require("dotenv").config();
const express = require("express");
const app = express();

app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())

// import the control router
app.use("/places", require("./controllers/places-control"))


//index
app.get("/", (req, res) => {
  res.render("home")
});


// 404 Needs to be at bottom
app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Page</h1>");
});

app.listen(process.env.PORT);
