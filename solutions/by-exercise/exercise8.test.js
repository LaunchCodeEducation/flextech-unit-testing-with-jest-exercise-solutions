const {
  addBook,
  findBooksByAuthor,
  removeBook,
  books,
} = require("../bookManager");

test("addBook using toEqual", () => {
  const book = addBook("Title", "Author");
  expect(book).toEqual({ title: "Title", author: "Author" });
});

test("books array using toContainEqual", () => {
  const book = addBook("Another Title", "Another Author");
  expect(books).toContainEqual(book);
});

test("book title matches pattern using toMatch", () => {
  const book = addBook("Unique Title", "Author");
  expect(book.title).toMatch(/Unique/);
});

test("findBooksByAuthor returns non-empty array using toBeTruthy", () => {
  addBook("Book 1", "Author");
  const foundBooks = findBooksByAuthor("Author");
  expect(foundBooks.length).toBeTruthy();
});

test("findBooksByAuthor returns empty array using toBeFalsy", () => {
  const foundBooks = findBooksByAuthor("Nonexistent Author");
  expect(foundBooks.length).toBeFalsy();
});

test("removeBook throws error using toThrow", () => {
  expect(() => removeBook("Nonexistent Book")).toThrow("Book not found");
});
