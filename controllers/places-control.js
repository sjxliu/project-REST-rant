const router = require("express").Router();
const places = require("../models/places");

// New above places the exact matching route needs to come first.
router.get("/new", (req, res) => {
  res.render("/places/new");
});

//Post
router.post("/", (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = "http://placekitten.com/400/400";
  }
  if (!req.body.city) {
    req.body.city = "Anytown";
  }
  if (!req.body.state) {
    req.body.state = "USA";
  }
  places.push(req.body)
  res.redirect("/places");
});

//places
router.get("/places/:id", (req, res) => {
  res.render("/places/index", { places });
});

module.exports = router;
