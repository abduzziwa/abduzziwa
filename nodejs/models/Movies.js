const { default: mongoose } = require("mongoose");

const express = require("express");
const app = express();
app.use(express.json());

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT | 3000;
const connAtlas = process.env.connStrAtlas;

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const Users = mongoose.model("Users", userSchema, "users");

const Movies = require("../MoviesSchema");

app.get("/", (req, res) => {
  res.send("Hi, What do you want here ?");
});
app.get("/users", async (req, res) => {
  const users = await Users.find();
  res.send(`Users: ${users}`);
});
app.get("/movies", async (req, res) => {
  const movies = await Movies.find();
  res.send(`Movies: ${[movies]}`);
});

async function connect() {
  await mongoose.connect(connAtlas, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "sample_mflix",
  });
  console.log("Connceted to the Database");

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

connect();
