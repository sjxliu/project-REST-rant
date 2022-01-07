const router = require("express").Router();
const places = require("../models/places");
var bodyParser = require('body-parser')

// create application/json parser
//var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// New above places the exact matching route needs to come first.
router.get("/new", (req, res) => {
  res.render("/places/New");
});

//Places
router.get("/", (req, res) => {
  let places = [{
      name: 'H-Thai-ML',
      city: 'Seattle',
      state: 'WA',
      cuisines: 'Thai, Pan-Asian',
      pic: '/images/thaiImage.jpg'
  }, {
      name: 'Coding Cat Cafe',
      city: 'Phoenix',
      state: 'AZ',
      cuisines: 'Coffee, Bakery',
      pic: 'images/catCafeImage.jpg'
  }]
  res.render("places/index", { places })
})


//post
router.post("/", urlencodedParser, (req, res) => {
  const obj = JSON.parse(JSON.stringify(req.body))
  console.log(obj);
  res.send("POST /places")
})

//Show
router.get("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    res.render("places/show", {place: places[id], id});
  }
});


//Delete
router.delete("/places/:id", (req,res)=>{
  let id = Number(req.params.id)
  if (isNaN(id)){
    res.render("error404")
  } 
  else if (!places[id]){
    res.render("error404")
  }
  else {
    places.splice(i, 1)
    res.redirect("/places")
  }
})


module.exports = router;
