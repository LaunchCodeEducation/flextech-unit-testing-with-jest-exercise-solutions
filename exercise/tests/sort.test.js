const { loadMovies, getMovies } = require("../movieData");
const { sortByTitle } = require("../sort");

let movies;

describe("Sort Functions", () => {
  // Exercise 4 solution
  beforeEach(() => {
    loadMovies();
    movies = getMovies();
  });

  // Exercise 4 solution
  afterEach(() => {
    movies = null;
  });

  // Exercise 4 solution
  test("should sort movies by title", () => {
    const sorted = sortByTitle(movies);
    expect(sorted[0].title).toBe("12 Angry Men");
  });
});
