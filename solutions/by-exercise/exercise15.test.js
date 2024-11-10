// __tests__/search.test.js

test("should call searchByTitle function", async () => {
  const spy = jest.spyOn(require("../search"), "searchByTitle");
  const movies = getMovies();
  await searchByTitle(movies, "Godfather");
  expect(spy).toHaveBeenCalled();
  spy.mockRestore();
});
