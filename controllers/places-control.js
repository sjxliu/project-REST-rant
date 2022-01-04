const router = require("express").Router();

// New above places the exact matching route needs to come first.
router.get("/new", (req, res) => {
  res.render("/places/new");
});

//places
router.get("/places/:id", (req, res) => {
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
  res.render("/places/index", { places });
});

module.exports = router;
