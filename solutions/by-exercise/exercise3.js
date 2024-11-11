// bookManager.js

const updateBookTitle = (oldTitle, newTitle) => {
  const book = books.find((book) => book.title === oldTitle);
  if (!book) throw new Error("Book not found");
  book.title = newTitle;
  return book;
};

module.exports = {
  // Existing exports...
  updateBookTitle,
};
