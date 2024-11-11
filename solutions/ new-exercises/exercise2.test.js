// search.test.js
const { loadMovies, getMovies } = require("../movieData");
const { searchByTitle } = require("../search");

describe("Search Functions", () => {
  beforeAll(() => {
    loadMovies();
  });

  test("should find movies by title", () => {
    const movies = getMovies();
    const results = searchByTitle(movies, "Godfather");
    expect(results.length).toBeGreaterThan(0);
  });
});
