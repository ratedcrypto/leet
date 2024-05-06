const containsDuplicate = require("./index.js");

test("containsDuplicate function exists", () => {
  expect(typeof containsDuplicate).toEqual("function");
});

test("example 1", () => {
  expect(containsDuplicate([1, 2, 3, 1])).toEqual(true);
});

test("example 2", () => {
  expect(containsDuplicate([1, 2, 3, 4])).toEqual(false);
});

test("example 3", () => {
  expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toEqual(true);
});
