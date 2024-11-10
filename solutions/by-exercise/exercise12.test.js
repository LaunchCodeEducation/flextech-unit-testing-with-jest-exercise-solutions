// __tests__/search.test.js

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
