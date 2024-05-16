const knapsack = require("./index.js");

test("knapsack function exists", () => {
  expect(typeof knapsack).toEqual("function");
});

test("example 1", () => {
  expect(knapsack([1, 3, 4, 5], [1, 4, 5, 7], 7, 4)).toEqual(9);
});

test("example 2", () => {
  expect(knapsack([1, 1, 9], [30, 20, 10], 10, 3)).toEqual(50);
});
