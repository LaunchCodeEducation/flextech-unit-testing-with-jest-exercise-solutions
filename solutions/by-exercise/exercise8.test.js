// __tests__/bookManager.test.js

const {
  addBook,
  updateBookTitle,
  removeBook,
  books,
} = require("../bookManager");

describe("Book Manager Functions", () => {
  describe("addBook", () => {
    test("addBook should add a new book to the collection", () => {
      const book = addBook("Test Title", "Test Author");
      expect(book).toEqual({ title: "Test Title", author: "Test Author" });
      expect(books).toContainEqual(book);
    });
  });

  describe("removeBook", () => {
    test("removeBook should remove a book from the collection", () => {
      addBook("Book to Remove", "Author");
      const removedBook = removeBook("Book to Remove");
      expect(removedBook.title).toBe("Book to Remove");
    });

    test("removeBook should throw an error if the book is not found", () => {
      expect(() => removeBook("Nonexistent Book")).toThrow("Book not found");
    });
  });

  describe("findBooksByAuthor", () => {});

  describe("update book", () => {
    test("updateBookTitle should update the title of an existing book", () => {
      addBook("Old Title", "Author Name");
      const updatedBook = updateBookTitle("Old Title", "New Title");
      expect(updatedBook.title).toBe("New Title");
      expect(books.find((book) => book.title === "New Title")).toBeTruthy();
    });

    test("updateBookTitle should throw an error if the book does not exist", () => {
      expect(() => updateBookTitle("Nonexistent Title", "Any Title")).toThrow(
        "Book not found"
      );
    });
  });
});
