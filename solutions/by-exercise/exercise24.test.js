// __tests__/search.test.js

test("should match movie title pattern", () => {
  const movies = [{ title: "The Matrix" }];
  const results = searchByTitle(movies, "matrix");
  expect(results[0].title).toMatch(/Matrix/i);
});
