const { loadMovies, getMovies } = require("../../exercise/movieData");

test("should load movies data", () => {
  loadMovies();
  const movies = getMovies();
  expect(movies.length).toBeGreaterThan(100);
});
