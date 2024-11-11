/*

Exercise 10: Testing Promises with resolves
Description: Modify search.js to return a Promise and test using resolves.

Answer:

Modify search.js:
*/

// search.js
function searchByTitle(movies, title) {
  return new Promise((resolve) => {
    const results = movies.filter((movie) =>
      movie.title.toLowerCase().includes(title.toLowerCase())
    );
    resolve(results);
  });
}
