require("dotenv").config();
const express = require("express");
const app = express();

app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())

// import the control router
app.use("/places", require("./controllers/places-control"))


//index
app.get("/", (req, res) => {
  res.render("index")
});


// 404 Needs to be at bottom
app.get("*", (req, res) => {
  res.render("error404")
});

app.listen(process.env.PORT);
