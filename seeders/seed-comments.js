const db = require("../models");

async function seed() {
  let place = await db.Place.findOne({ name: "H-Thai-ML" });

  //fake sample comment
  let comment = await db.Comment.create({
    author: "Famished Fran",
    rant: false,
    stars: 5.0,
    content: "WOW!",
  });
  // add that to comment to the places's comment array
  place.comments.push(comment.id);
  await place.save()
  process.exit();
}

seed();
