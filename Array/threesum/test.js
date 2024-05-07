const threesum = require("./index.js");

test("threesum function exists", () => {
  expect(typeof threesum).toEqual("function");
});

test("example 1", () => {
  expect(threesum([-1, 0, 1, 2, -1, -4])).toEqual([
    [-1, -1, 2],
    [-1, 0, 1],
  ]);
});

test("example 2", () => {
  expect(threesum([0, 1, 1])).toEqual([]);
});

test("example 3", () => {
  expect(threesum([0, 0, 0])).toEqual([[0, 0, 0]]);
});
