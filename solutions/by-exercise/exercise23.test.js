// __tests__/movieData.test.js

jest.mock("axios");
const axios = require("axios");

test("should fetch movies from API", async () => {
  axios.get.mockResolvedValue({ data: [{ title: "API Movie" }] });
  await loadMoviesFromAPI();
  const movies = getMovies();
  expect(movies).toEqual([{ title: "API Movie" }]);
});
