const { loadMovies, getMovies } = require("../movieData");
const { sortByTitle } = require("../sort");

let movies;

describe("Sort Functions", () => {
  beforeEach(async () => {
    await loadMovies();
    console.log(getMovies());
    movies = getMovies();
  });

  afterEach(() => {
    movies = null;
    jest.clearAllMocks();
  });

  test("should sort movies by title", () => {
    const sorted = sortByTitle(movies);
    expect(sorted[0].title).toBeDefined();
  });

  test("should call compare function correct number of times", () => {
    const compareFn = jest.fn((a, b) => a.title.localeCompare(b.title));
    const movies = getMovies();
    movies.sort(compareFn);
    expect(compareFn).toHaveBeenCalled();
    expect(compareFn.mock.calls.length).toBe(movies.length - 1);
  });

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
});
