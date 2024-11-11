// search.js
function searchByTitle(movies, title) {
  const results = movies.filter((movie) =>
    movie.title.toLowerCase().includes(title.toLowerCase())
  );
  return results;
}

function searchByDirector(movies, director) {
  return movies.filter((movie) =>
    movie.director.toLowerCase().includes(director.toLowerCase())
  );
}

module.exports = { searchByTitle, searchByDirector };
