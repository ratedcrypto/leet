const slidingWindow = require("./index.js");

test("slidingWindow function exists", () => {
  expect(typeof slidingWindow).toEqual("function");
});

test("example 1", () => {
  expect(slidingWindow([2, 5, 1, 8, 2, 9, 1], 3)).toEqual(19);
});
