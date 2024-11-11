// __tests__/search.test.js

test("should filter movies by genre", () => {
  const movies = [
    { title: "Movie 1", genre: "Action" },
    { title: "Movie 2", genre: "Drama" },
  ];
  const results = filterByGenre(movies, "Action");
  expect(results).toEqual([{ title: "Movie 1", genre: "Action" }]);
});
