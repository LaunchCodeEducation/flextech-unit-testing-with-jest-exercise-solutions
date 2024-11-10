// movieData.js
const fs = require("fs");
const path = require("path");

let movies = [];

function loadMovies() {
  const data = fs.readFileSync(path.join(__dirname, "movies.json"));
  movies = JSON.parse(data);
}

function getMovies() {
  return movies;
}

module.exports = { loadMovies, getMovies };
