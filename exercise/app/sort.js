// sort.js
function sortByTitle(movies) {
  return [...movies].sort((a, b) => a.title.localeCompare(b.title));
}

function sortByYear(movies) {
  return [...movies].sort((a, b) => a.year - b.year);
}

function sortByRating(movies) {
  return [...movies].sort((a, b) => b.rating - a.rating);
}

module.exports = { sortByTitle, sortByYear, sortByRating };
