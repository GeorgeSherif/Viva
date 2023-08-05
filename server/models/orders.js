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
  },
  phoneNumber: {
    type: String,
  },
  cart: [
    {
      productName: {
        type: String,
      },
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
