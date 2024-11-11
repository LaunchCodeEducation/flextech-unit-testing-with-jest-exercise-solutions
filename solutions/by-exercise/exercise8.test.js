// __tests__/movieData.test.js

test("should load movies data asynchronously", (done) => {
  loadMovies((err) => {
    expect(err).toBeNull();
    const movies = getMovies();
    expect(movies.length).toBeGreaterThan(100);
    done();
  });
});
