const fs = require("fs");
jest.mock("fs");
const { loadMovies, getMovies } = require("../movieData");

test("should load movies data", () => {
  loadMovies();
  const movies = getMovies();
  expect(movies.length).toBeGreaterThan(100);
});

test("should throw error when movie data is invalid", () => {
  fs.readFileSync.mockImplementation(() => "{ invalid json ");
  expect(() => {
    loadMovies();
  }).toThrow();
});

test("should load movies data asynchronously", (done) => {
  loadMovies((err) => {
    expect(err).toBeNull();
    const movies = getMovies();
    expect(movies.length).toBeGreaterThan(100);
    done();
  });
});
