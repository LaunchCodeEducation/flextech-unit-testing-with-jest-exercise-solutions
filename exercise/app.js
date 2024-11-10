// app.js
const readline = require("readline");
const { loadMovies, getMovies } = require("./movieData");
const { searchByTitle, searchByDirector } = require("./search");
const { sortByTitle, sortByYear, sortByRating } = require("./sort");

loadMovies();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayMenu() {
  console.log("\nMovie Database");
  console.log("1. Search by Title");
  console.log("2. Search by Director");
  console.log("3. Sort by Title");
  console.log("4. Sort by Year");
  console.log("5. Sort by Rating");
  console.log("6. Exit");
}

function promptUser() {
  displayMenu();
  rl.question("\nChoose an option: ", (answer) => {
    handleMenuOption(answer);
  });
}

function handleMenuOption(option) {
  const movies = getMovies();
  switch (option) {
    case "1":
      rl.question("Enter title to search: ", async (title) => {
        const results = await searchByTitle(movies, title);
        displayMovies(results);
        promptUser();
      });
      break;
    case "2":
      rl.question("Enter director to search: ", (director) => {
        const results = searchByDirector(movies, director);
        displayMovies(results);
        promptUser();
      });
      break;
    case "3":
      const sortedByTitle = sortByTitle(movies);
      displayMovies(sortedByTitle);
      promptUser();
      break;
    case "4":
      const sortedByYear = sortByYear(movies);
      displayMovies(sortedByYear);
      promptUser();
      break;
    case "5":
      const sortedByRating = sortByRating(movies);
      displayMovies(sortedByRating);
      promptUser();
      break;
    case "6":
      console.log("Goodbye!");
      rl.close();
      break;
    default:
      console.log("Invalid option. Please try again.");
      promptUser();
  }
}

function displayMovies(movies) {
  console.log(movies);
  console.log("\nMovies:");
  movies.forEach((movie, index) => {
    console.log(
      `${index + 1}. ${movie.title} (${movie.year}) - Rating: ${movie.rating}`
    );
  });
}

promptUser();
