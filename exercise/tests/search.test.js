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

  test("should find movies by title using Promise", () => {
    const movies = getMovies();
    return expect(searchByTitle(movies, "Godfather")).resolves.toHaveLength(
      expect.any(Number)
    );
  });
  test("should find movies by title using async/await", async () => {
    const movies = getMovies();
    const results = await searchByTitle(movies, "Godfather");
    expect(results.length).toBeGreaterThan(0);
  });
  test("should return truthy value when movies are found", async () => {
    const movies = getMovies();
    const results = await searchByTitle(movies, "Godfather");
    expect(results.length > 0).toBeTruthy();
  });

  test("should return falsy value when no movies are found", async () => {
    const movies = getMovies();
    const results = await searchByTitle(movies, "Nonexistent Movie");
    expect(results.length > 0).toBeFalsy();
  });
  test('should contain "The Godfather" in search results', async () => {
    const movies = getMovies();
    const results = await searchByTitle(movies, "Godfather");
    const titles = results.map((movie) => movie.title);
    expect(titles).toContain("The Godfather");
  });
  test("should call searchByTitle function", async () => {
    const spy = jest.spyOn(require("../search"), "searchByTitle");
    const movies = getMovies();
    await searchByTitle(movies, "Godfather");
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
  test("should return exact movie object", async () => {
    const movies = [{ title: "Test Movie", year: 2020 }];
    const results = await searchByTitle(movies, "Test Movie");
    expect(results[0]).toStrictEqual({ title: "Test Movie", year: 2020 });
  });

  test("should match movie title pattern", () => {
    const movies = [{ title: "The Matrix" }];
    const results = searchByTitle(movies, "matrix");
    expect(results[0].title).toMatch(/Matrix/i);
  });
  test("should filter movies by genre", () => {
    const movies = [
      { title: "Movie 1", genre: "Action" },
      { title: "Movie 2", genre: "Drama" },
    ];
    const results = filterByGenre(movies, "Action");
    expect(results).toEqual([{ title: "Movie 1", genre: "Action" }]);
  });
});
