const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrdersSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  phoneNumber: {
    type: String,
  },
  cart: [
    {
      productID: {
        type: String,
      },
      quantities: {
        type: Schema.Types.Mixed,
      },
      selectedColors: {
        type: [String],
      },
    },
  ],
});

module.exports = mongoose.model("Orders", OrdersSchema);
