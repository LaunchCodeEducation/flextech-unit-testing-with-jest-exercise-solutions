// search.js

function filterByGenre(movies, genre) {
  return movies.filter(
    (movie) => movie.genre.toLowerCase() === genre.toLowerCase()
  );
}

module.exports = { searchByTitle, searchByDirector, filterByGenre };
