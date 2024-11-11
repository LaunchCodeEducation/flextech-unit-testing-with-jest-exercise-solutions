// __tests__/bookManager.test.js

const {
  addBook,
  updateBookTitle,
  removeBook,
  books,
} = require("../bookManager");

jest.mock("fs");

const fs = require("fs");

// Exercise 13
fs.readFile.mockImplementation((path, encoding, callback) => {
  callback(
    null,
    JSON.stringify([{ title: "Mocked Book", author: "Mocked Author" }])
  );
});

// exercise 7
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

// exercise 6
describe("Book Manager Functions", () => {
  // exercise 6
  describe("addBook", () => {
    // exercise 4
    test("addBook should add a new book to the collection", () => {
      const book = addBook("Test Title", "Test Author");
      expect(book).toEqual({ title: "Test Title", author: "Test Author" });
      expect(books).toContainEqual(book);
    });
  });

  // exercise 6
  describe("removeBook", () => {
    // exercise 5
    test("removeBook should remove a book from the collection", () => {
      addBook("Book to Remove", "Author");
      const removedBook = removeBook("Book to Remove");
      expect(removedBook.title).toBe("Book to Remove");
    });

    // exercise 5
    test("removeBook should throw an error if the book is not found", () => {
      expect(() => removeBook("Nonexistent Book")).toThrow("Book not found");
    });
  });

  // exercise 6
  describe("findBooksByAuthor", () => {});

  // exercise 6
  describe("update book", () => {
    // exercise 3
    test("updateBookTitle should update the title of an existing book", () => {
      addBook("Old Title", "Author Name");
      const updatedBook = updateBookTitle("Old Title", "New Title");
      expect(updatedBook.title).toBe("New Title");
      expect(books.find((book) => book.title === "New Title")).toBeTruthy();
    });

    // exercise 3
    test("updateBookTitle should throw an error if the book does not exist", () => {
      expect(() => updateBookTitle("Nonexistent Title", "Any Title")).toThrow(
        "Book not found"
      );
    });
  });
});
