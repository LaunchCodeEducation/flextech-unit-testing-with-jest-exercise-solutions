// search.js
function searchByTitle(movies, title) {
  return movies.filter((movie) =>
    movie.title.toLowerCase().includes(title.toLowerCase())
  );
}

function searchByDirector(movies, director) {
  return movies.filter((movie) =>
    movie.director.toLowerCase().includes(director.toLowerCase())
  );
}

module.exports = { searchByTitle, searchByDirector };
