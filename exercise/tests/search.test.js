const { loadMovies, getMovies } = require("../movieData");
const { searchByTitle, searchByDirector } = require("../search");

describe("Search Functions", () => {
  // Exercise 2 solution
  beforeAll(() => {
    loadMovies();
  });

  // Exercise 2 solution
  test("should find movies by title", () => {
    const movies = getMovies();
    const results = searchByTitle(movies, "Godfather");
    expect(results.length).toBeGreaterThan(0);
  });

  // Exercise 3 solution
  test("should find movies by director", () => {
    const movies = getMovies();
    const results = searchByDirector(movies, "Nolan");
    expect(results.length).toBeGreaterThan(0);
  });

  // Exercise 5 solution
  test("that the search by title method works on its own", () => {
    const movies = [
      { title: "Test Movie", year: 2020 },
      { title: "Another Movie", year: 2019 },
    ];
    const results = searchByTitle(movies, "Movie that shouldn't be there");
    expect(results.length).toEqual(0);
  });
});
