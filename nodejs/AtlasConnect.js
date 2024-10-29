const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const mongoose = require("mongoose");
const Customer = require("./models/Customers");

mongoose.set("strictQuery", false);
const PORT = process.env.PORT | 3000;
const connStrAtlas = process.env.connStrAtlas;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const customer = new Customer({
  name: "Abdul",
  industry: "marketing",
});

app.get("/", (req, res) => {
  res.send(customer);
});

const start = async () => {
  try {
    await mongoose.connect(connStrAtlas);
    console.log("Connected.");
    app.listen(PORT, () => {
      console.log("App listening on port " + PORT);
    });
  } catch (error) {
    console.log(error.message);
  }
};

start();
