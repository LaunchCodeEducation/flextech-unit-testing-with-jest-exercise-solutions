// __tests__/movieData.test.js

test("should reject when loading invalid data", () => {
  fs.readFile.mockImplementation((path, callback) => {
    callback(new Error("File not found"), null);
  });
  return expect(
    new Promise((resolve, reject) => {
      loadMovies((err) => {
        if (err) reject(err);
        else resolve();
      });
    })
  ).rejects.toThrow("File not found");
});
