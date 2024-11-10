// __tests__/sort.test.js

test("should call compare function correct number of times", () => {
  const compareFn = jest.fn((a, b) => a.title.localeCompare(b.title));
  const movies = getMovies();
  movies.sort(compareFn);
  expect(compareFn).toHaveBeenCalled();
  expect(compareFn.mock.calls.length).toBe(movies.length - 1);
});
