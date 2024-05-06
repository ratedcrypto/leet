const twosum = require("./index.js");

test("twosum function exists", () => {
  expect(typeof twosum).toEqual("function");
});

test("example 1", () => {
  expect(twosum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test("example 2", () => {
  expect(twosum([3, 2, 4], 6)).toEqual([1, 2]);
});

test("example 3", () => {
  expect(twosum([3, 3], 6)).toEqual([0, 1]);
});
