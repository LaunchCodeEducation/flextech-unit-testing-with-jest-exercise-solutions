/*
Exercise 8: Testing Asynchronous Code with Callbacks
Description: Modify movieData.js to load movies asynchronously 

Answer:

Modify movieData.js:
*/

// movieData.js
const fs = require("fs");
const path = require("path");

let movies = [];

function loadMovies() {
  fs.readFile(path.join(__dirname, "movies.json"), (err, data) => {
    if (err) return callback(err);
    movies = JSON.parse(data);
  });
}

function getMovies() {
  return movies;
}

module.exports = { loadMovies, getMovies };
