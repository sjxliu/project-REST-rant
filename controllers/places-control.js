const router = require("express").Router();

//places
router.get("/", (req, res) => {
  let places = [
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "../images/matcha.jpg",
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: "../images/pizza.jpg",
    },
  ];
  res.render("places/index", { places });
});

// New
router.get("/new", (req, res) => {
  res.render("places/new");
});

module.exports = router;
