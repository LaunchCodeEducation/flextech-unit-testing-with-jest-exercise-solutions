const fs = require("fs");
const axios = require("axios");
jest.mock("fs");
jest.mock("axios");

const { loadMovies, getMovies } = require("../movieData");

test("should load movies data", async () => {
  await loadMovies();
  const movies = await getMovies();
  expect(movies.length).toBeGreaterThan(100);
});

test("should throw error when movie data is invalid", () => {
  fs.readFileSync.mockImplementation(() => "{ invalid json ");
  expect(async () => {
    await loadMovies();
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

test("should reject when loading invalid data", () => {
  fs.readFile.mockImplementation((path, callback) => {
    callback(new Error("File not found"), null);
  });
  return expect(
    new Promise((resolve, reject) => {
      loadMovies((err) => {
        if (err) reject(err);
        else resolve();
      });
    })
  ).rejects.toThrow("File not found");
});

test("should fetch movies from API", async () => {
  axios.get.mockResolvedValue({ data: [{ title: "API Movie" }] });
  await loadMoviesFromAPI();
  const movies = getMovies();
  expect(movies).toEqual([{ title: "API Movie" }]);
});
