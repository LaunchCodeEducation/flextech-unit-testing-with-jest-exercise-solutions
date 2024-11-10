// search.js
function searchByTitle(movies, title) {
  return new Promise((resolve) => {
    const results = movies.filter((movie) =>
      movie.title.toLowerCase().includes(title.toLowerCase())
    );
    resolve(results);
  });
}

function searchByDirector(movies, director) {
  return movies.filter((movie) =>
    movie.director.toLowerCase().includes(director.toLowerCase())
  );
}

function filterByGenre(movies, genre) {
  return movies.filter(
    (movie) => movie.genre.toLowerCase() === genre.toLowerCase()
  );
}

module.exports = { searchByTitle, searchByDirector, filterByGenre };
