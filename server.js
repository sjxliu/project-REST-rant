require("dotenv").config();
const express = require("express");
const app = express();

// import the control router
app.use("/places", require("./controllers/places-control"))


//index
app.get("/", (req, res) => {
  res.send("Hello World");
});


// 404 Needs to be at bottom
app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Page</h1>");
});

app.listen(process.env.PORT);
