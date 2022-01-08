const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: { type: String, default: "/images/matcha.jpg" },
  cuisines: { type: String, required: true },
  city: { type: String, default: "Burnt Porcupine" },
  state: { type: String, default: "Maine, USA" },
  founded: {
    type: Number,
    min: [1673, "Damn, that's old!"],
    max: [new Date().getFullYear(), "Are you from the future?"],
  },
});

placeSchema.methods.showEstablished = function () {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}`;
};

module.exports = mongoose.model("Place", placeSchema);
