const mongoose = require("mongoose");

const bagSchema = mongoose.Schema(
  {
    image: String,
    brand: String,
    product: String,
    price: Number,
    strike: Number,
    discount: String,
    size: String,
    quantity:Number,
    userId:{type:String,required:true}
  },
  {
    versionKey: false,
  }
);

const BagModel = mongoose.model("bagdata", bagSchema);

module.exports = {
  BagModel,
};