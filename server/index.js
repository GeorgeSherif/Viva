if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dbUrl = process.env.DB_URL;
const cors = require("cors");

const products = require("./routes/products");
const orders = require("./routes/orders");

const app = express();
app.use(cors());
app.use(cookieParser());

mongoose.connect(dbUrl, {}, (err) => {
  if (err) throw err;
  console.log("Connected to MongoDB!!!");
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", products);
app.use("/api/orders", orders);

app.listen(8000, () => {
  console.log("Serving on port 8000");
});
