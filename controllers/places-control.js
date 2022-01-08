const router = require("express").Router();
const places = require("../models/places");
var bodyParser = require("body-parser");

// create application/json parser
//var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// New above places the exact matching route needs to come first.
router.get("/new", (req, res) => {
  res.render("/places/New");
});

//Places
router.get("/", (req, res) => {
  // let places = [
  //   {
  //     name: "H-Thai-ML",
  //     city: "Seattle",
  //     state: "WA",
  //     cuisines: "Thai, Pan-Asian",
  //     pic: "/images/thaiImage.jpg",
  //   },
  //   {
  //     name: "Coding Cat Cafe",
  //     city: "Phoenix",
  //     state: "AZ",
  //     cuisines: "Coffee, Bakery",
  //     pic: "images/catCafeImage.jpg",
  //   },
  // ];
  res.render("places/Index", { places });
});

//post
router.post("/", urlencodedParser, (req, res) => {
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj);
  res.send("POST /places");
});

//Show
router.get("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    res.render("places/show", {
      place: places[req.params.id],
      id: req.params.id,
    });
  }
});

//Edit
router.get("/:id/edit", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    res.render("places/edit", { place: places[id], id: req.params.id });
  }
});

//Update
router.put("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    // Dig into req.body + make sure data is valid
    if (!req.body.pic) {
      //Default img if one not provided
      req.body.pic = "http://placekitten.com/400/400";
    }
    if (!req.body.city) {
      req.body.city = "Anytown";
    }
    if (!req.body.state) {
      req.body.state = "USA";
    }

    console.log(req.body);
    // Save the new data into places[id]
    places[req.params.id] = req.body;
    res.redirect(`/places/${id}`);
  }
});

//Delete
router.delete("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    places.splice(id, 1);
    res.redirect("/places");
  }
});

module.exports = router;
