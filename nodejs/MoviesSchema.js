const mongoose = require("mongoose");

// Define the schema for the Movie
const movieSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  plot: String,
  genres: [String], // Array of strings
  runtime: Number,
  rated: String,
  cast: [String], // Array of strings
  poster: String,
  title: String,
  fullplot: String,
  languages: [String], // Array of strings
  released: Date,
  directors: [String], // Array of strings
  writers: [String], // Array of strings
  awards: {
    wins: Number,
    nominations: Number,
    text: String,
  },
  lastupdated: Date,
  year: Number,
  imdb: {
    rating: Number,
    votes: Number,
    id: Number,
  },
  countries: [String], // Array of strings
  type: String,
  tomatoes: {
    viewer: mongoose.Schema.Types.Mixed, // Mixed type for flexibility
    production: String,
    lastUpdated: Date,
  },
  num_mflix_comments: Number,
  plot_embedding: [Number], // Array of numbers
});

module.exports = mongoose.model("Movie", movieSchema);
