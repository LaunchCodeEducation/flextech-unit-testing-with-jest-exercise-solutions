// __tests__/sort.test.js
const { loadMovies, getMovies } = require("../movieData");
const { sortByTitle } = require("../sort");

let movies;

describe("Sort Functions", () => {
  beforeEach(() => {
    loadMovies();
    movies = getMovies();
  });

  afterEach(() => {
    movies = null;
  });

  test("should sort movies by title", () => {
    const sorted = sortByTitle(movies);
    expect(sorted[0].title).toBeDefined();
  });
});
