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

  test("should return correct movie object", () => {
    const movies = [
      { title: "Test Movie", year: 2020 },
      { title: "Another Movie", year: 2019 },
    ];
    const results = searchByTitle(movies, "Test Movie");
    expect(results[0]).toEqual({ title: "Test Movie", year: 2020 });
  });
});
