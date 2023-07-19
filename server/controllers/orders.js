const ErrorResponse = require("../utils/ExpressError");
const catchAsync = require("../utils/catchAsync");

const Orders = require("../models/Orders");

exports.addOrder = catchAsync(async (req, res, next) => {
  console.log("Hello");
  const { firstName, lastName, email, phoneNumber, cart } = req.body;
  const newOrder = await Orders.create({
    firstName,
    lastName,
    email,
    phoneNumber,
    cart: cart,
  });

  res.status(200).json({
    status: "success",
    data: {
      order: newOrder,
    },
  });
});
