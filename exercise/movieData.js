// movieData.js
const movieData = require("./movies.json");

let movies = [];

function loadMovies() {
  movies = movieData;
}

function getMovies() {
  return movies;
}

module.exports = { loadMovies, getMovies };
