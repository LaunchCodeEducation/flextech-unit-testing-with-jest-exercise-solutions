// __tests__/search.test.js
const { loadMovies, getMovies } = require("../movieData");
const { searchByTitle, searchByDirector } = require("../search");

describe("Search Functions", () => {
  beforeAll(() => {
    loadMovies();
  });

  test("should find movies by title", () => {
    const movies = getMovies();
    const results = searchByTitle(movies, "Godfather");
    expect(results.length).toBeGreaterThan(0);
  });

  test("should find movies by director", () => {
    const movies = getMovies();
    const results = searchByDirector(movies, "Nolan");
    expect(results.length).toBeGreaterThan(0);
  });
});
