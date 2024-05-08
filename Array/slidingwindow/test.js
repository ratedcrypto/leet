const {
  slidingWindowExample1,
  slidingWindowExample2,
  slidingWindowExample3,
} = require("./index.js");

// test("example 1", () => {
//   expect(slidingWindowExample1([2, 5, 1, 8, 2, 9, 1], 3)).toEqual(19);
// });

// test("example 2", () => {
//   expect(slidingWindowExample2([12, -1, -7, 8, -15, 30, 16, 28], 3)).toEqual([
//     -1, -1, -7, -15, -15, 0,
//   ]);
// });

test("example 3", () => {
  expect(slidingWindowExample3("forxxxorfxxxdofr", "for")).toEqual(3);
});
