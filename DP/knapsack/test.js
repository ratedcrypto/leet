const { memoizeKnapsack, knapsackTopDown } = require("./index.js");

test("memoizeKnapsack function exists", () => {
  expect(typeof memoizeKnapsack).toEqual("function");
});

test("example 1", () => {
  expect(memoizeKnapsack([1, 3, 4, 5], [1, 4, 5, 7], 7, 4)).toEqual(9);
});

test("example 2", () => {
  expect(memoizeKnapsack([1, 1, 9], [30, 20, 10], 10, 3)).toEqual(50);
});

test("example 2", () => {
  expect(knapsackTopDown([1, 1, 9], [30, 20, 10], 10)).toEqual(50);
});
