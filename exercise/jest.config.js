// exercise 15
module.exports = {
  testEnvironment: "node",
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 80,
      functions: 90,
      lines: 90,
    },
  },
};

// exercise 18

// module.exports = {
//   testEnvironment: "node",
//   collectCoverageFrom: ["bookManager.js"],
// };
