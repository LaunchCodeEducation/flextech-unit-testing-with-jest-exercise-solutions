// movieData.js
const fs = require("fs");
const path = require("path");

let movies = [];

function loadMovies(callback = null) {
  fs.readFile(path.join(__dirname, "movies.json"), (err, data) => {
    if (err) return callback(err);
    movies = JSON.parse(data);
    if (callback) {
      callback(null);
    }
  });
}

function getMovies() {
  return movies;
}

module.exports = { loadMovies, getMovies };
