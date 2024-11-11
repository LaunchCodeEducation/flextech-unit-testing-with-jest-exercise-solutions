const { loadMovies, getMovies } = require("../../exercise/movieData");

// Exercise 1 solution
test("should load movies data", () => {
  loadMovies();
  const movies = getMovies();
  expect(movies.length).toBeGreaterThan(100);
});
