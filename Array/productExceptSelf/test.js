const productExceptSelf = require("./index.js");

test("productExceptSelf function exists", () => {
  expect(typeof productExceptSelf).toEqual("function");
});

test("example 1", () => {
  expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
});

test("example 2", () => {
  expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0]);
});
