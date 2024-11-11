// __tests__/bookManager.test.js

const { addBook, books } = require("../bookManager");

test("addBook should add a new book to the collection", () => {
  const book = addBook("Test Title", "Test Author");
  expect(book).toEqual({ title: "Test Title", author: "Test Author" });
  expect(books).toContainEqual(book);
});
