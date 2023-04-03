const mongoose = require("mongoose");

const manSchema = mongoose.Schema(
  {
    image: String,
    brand: String,
    product: String,
    price: Number,
    strike: Number,
    discount: String,
    quantity:Number
  },
  {
    versionKey: false,
  }
);

const MenModel = mongoose.model("mendata", manSchema);

module.exports = {
  MenModel,
};