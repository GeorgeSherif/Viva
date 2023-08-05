const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
  productName: {
    type: String,
  },
  productID: {
    type: String,
    unique: true,
  },
  family: {
    type: String,
  },
  coloursAvailable: [
    {
      type: String,
    },
  ],
  sizesAvailable: [
    {
      type: String,
    },
  ],
  productOrderToShow: {
    type: Number,
  },
  productMaterial: {
    type: String,
  },
  productWholesalePrice: {
    type: String,
  },
  productConsumerPrice: {
    type: String,
  },
  productMOQs: {
    type: Number,
  },
});

module.exports = mongoose.model("Products", ProductsSchema);
