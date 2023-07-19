const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
  productName: {
    type: String,
    unique: true,
  },
  productID: {
    type: String,
    unique: true,
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
    unique: true,
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
