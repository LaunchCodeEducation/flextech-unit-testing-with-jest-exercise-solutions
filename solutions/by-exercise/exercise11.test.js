// __tests__/search.test.js

test("should find movies by title using async/await", async () => {
  const movies = getMovies();
  const results = await searchByTitle(movies, "Godfather");
  expect(results.length).toBeGreaterThan(0);
});
