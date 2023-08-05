const ErrorResponse = require("../utils/ExpressError");
const catchAsync = require("../utils/catchAsync");

const Products = require("../models/products");

exports.getAllProducts = catchAsync(async (req, res, next) => {
  const l = await Products.find({});
  res.json(l);
});

exports.addProduct = catchAsync(async (req, res, next) => {
  console.log("Hello");
  const {
    productName,
    productID,
    productOrderToShow,
    productMaterial,
    productWholesalePrice,
    productConsumerPrice,
    productMOQs,
    coloursAvailable,
    sizesAvailable,
    family,
  } = req.body;
  const newProduct = await Products.create({
    productName,
    productID,
    productOrderToShow,
    productMaterial,
    productWholesalePrice,
    productConsumerPrice,
    productMOQs,
    coloursAvailable,
    sizesAvailable,
    family,
  });

  res.status(200).json({
    status: "success",
    data: {
      product: newProduct,
    },
  });
});
