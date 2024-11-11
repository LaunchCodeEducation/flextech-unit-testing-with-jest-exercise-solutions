// __tests__/bookManager.test.js

const {
  addBook,
  updateBookTitle,
  removeBook,
  findBooksByAuthor,
  saveBooks,
  loadBooks,
  books,
} = require("../bookManager");

jest.mock("fs");

const fs = require("fs");

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

  describe("exercise 10 tests", () => {
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
  });

  describe("exercise 11 tests", () => {
    test("primitive values with toBe and toEqual", () => {
      expect(5).toBe(5); // Passes
      expect(5).toEqual(5); // Passes
    });

    // Below test is expected to FAIL!
    test("objects with toEqual and toStrictEqual", () => {
      const book1 = { title: "Title", author: "Author" };
      const book2 = { title: "Title", author: "Author" };

      expect(book1).toEqual(book2); // Passes
      expect(book1).toBe(book2); // Fails
      expect(book1).toStrictEqual(book2); // Passes

      const book3 = { title: "Title", author: "Author", extra: undefined };
      expect(book1).toEqual(book3); // Passes
      expect(book1).toStrictEqual(book3); // Fails
    });
  });

  describe("Exercise 12 tests", () => {
    test("loadBooks reads books from file using mocked fs.readFile", async () => {
      fs.readFile.mockImplementation((path, encoding, callback) => {
        callback(
          null,
          JSON.stringify([{ title: "Mocked Book", author: "Mocked Author" }])
        );
      });

      await loadBooks();
      expect(books).toContainEqual({
        title: "Mocked Book",
        author: "Mocked Author",
      });
    });

    test("saveBooks writes books to file using mocked fs.writeFile", async () => {
      books.push({ title: "Book to Save", author: "Author" });
      fs.writeFile.mockImplementation((path, data, encoding, callback) => {
        callback(null);
      });

      await saveBooks();
      expect(fs.writeFile).toHaveBeenCalled();
    });
  });
});
