// __tests__/search.test.js

test("should find movies by title using Promise", () => {
  const movies = getMovies();
  return expect(searchByTitle(movies, "Godfather")).resolves.toHaveLength(
    expect.any(Number)
  );
});
