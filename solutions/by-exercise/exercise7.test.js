// __tests__/bookManager.test.js

const { books } = require("../bookManager");

beforeAll(() => {
  // Save the original books array
  books.length = 0;
});

afterAll(() => {
  // Restore the original books array if necessary
  books.length = 0;
});

beforeEach(() => {
  // Clear books array before each test
  books.length = 0;
});

afterEach(() => {
  // Additional teardown if necessary
});

describe("Book Manager Functions", () => {
  // Tests go here
});
