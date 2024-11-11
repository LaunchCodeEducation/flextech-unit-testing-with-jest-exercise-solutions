// __tests__/sort.test.js

expect.extend({
  toBeSortedByTitle(received) {
    for (let i = 1; i < received.length; i++) {
      if (received[i - 1].title > received[i].title) {
        return {
          message: () => "Array is not sorted by title",
          pass: false,
        };
      }
    }
    return {
      message: () => "Array is sorted by title",
      pass: true,
    };
  },
});

test("should sort movies by title", () => {
  const movies = getMovies();
  const sorted = sortByTitle(movies);
  expect(sorted).toBeSortedByTitle();
});
