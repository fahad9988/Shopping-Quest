const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
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

const OrderModel = mongoose.model("orderdata", orderSchema);

module.exports = {
OrderModel,
};