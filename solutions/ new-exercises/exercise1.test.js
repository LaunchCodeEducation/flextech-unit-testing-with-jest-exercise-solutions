// movieData.test.js
const { loadMovies, getMovies } = require("../movieData");

test("should load movies data", () => {
  loadMovies();
  const movies = getMovies();
  expect(movies.length).toBeGreaterThan(100);
});
