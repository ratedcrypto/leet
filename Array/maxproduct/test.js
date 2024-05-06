const maxProduct = require("./index.js");

test("maxProduct function exists", () => {
  expect(typeof maxProduct).toEqual("function");
});

test("example 1", () => {
  expect(maxProduct([2, 3, -2, 4])).toEqual(6);
});

test("example 2", () => {
  expect(maxProduct([-1, 3, -2, 4, -1, -1])).toEqual(24);
});

test("example 3", () => {
  expect(maxProduct([-2, 0, -1])).toEqual(0);
});
