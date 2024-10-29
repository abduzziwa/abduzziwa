const mongoose = require("mongoose");

const express = require("express");
const app = express();
app.use(express.json());

const dotenv = require("dotenv");
dotenv.config();


app.get("/", (req, res) => {
  res.send("Welcome..");
});


const connect = async () => {
  await mongoose.connect(process.env.connStrAtlas);
  console.log("Connected");
  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
};

connect();
