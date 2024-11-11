// __tests__/movieData.test.js

const fs = require("fs");
jest.mock("fs");

test("should throw error when movie data is invalid", () => {
  fs.readFileSync.mockImplementation(() => "{ invalid json ");
  expect(() => {
    loadMovies();
  }).toThrow();
});
