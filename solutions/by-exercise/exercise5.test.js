// __tests__/search.test.js

test("should return correct movie object", () => {
  const movies = [
    { title: "Test Movie", year: 2020 },
    { title: "Another Movie", year: 2019 },
  ];
  const results = searchByTitle(movies, "Test Movie");
  expect(results[0]).toEqual({ title: "Test Movie", year: 2020 });
});
