// __tests__/search.test.js

test("should return exact movie object", async () => {
  const movies = [{ title: "Test Movie", year: 2020 }];
  const results = await searchByTitle(movies, "Test Movie");
  expect(results[0]).toStrictEqual({ title: "Test Movie", year: 2020 });
});
