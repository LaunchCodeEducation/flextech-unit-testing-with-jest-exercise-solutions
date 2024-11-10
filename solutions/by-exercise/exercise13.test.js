// __tests__/search.test.js

test('should contain "The Godfather" in search results', async () => {
  const movies = getMovies();
  const results = await searchByTitle(movies, "Godfather");
  const titles = results.map((movie) => movie.title);
  expect(titles).toContain("The Godfather");
});
