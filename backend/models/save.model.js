const mongoose = require("mongoose");

const saveSchema = mongoose.Schema(
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

const SaveModel = mongoose.model("savedata", saveSchema);

module.exports = {
SaveModel,
};