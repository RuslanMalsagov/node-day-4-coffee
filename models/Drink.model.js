const mongoose = require("mongoose");
// const { boolean } = require("webidl-conversions");

const drinkSchema = mongoose.Schema({
  name: String,
  price: Number,
  inStock: Boolean,
  containCaffeine: Boolean,
  volume: Number,
  description: String,
});

const Drink = mongoose.model("Drink", drinkSchema);

module.exports = Drink;
