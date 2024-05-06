const maxProfit = require("./index.js");

test("maxProfit function exists", () => {
  expect(typeof maxProfit).toEqual("function");
});

test("example 1", () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(5);
});

test("example 1", () => {
  expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0);
});
