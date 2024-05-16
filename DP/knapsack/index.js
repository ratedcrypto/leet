// 0-1 Knapsack

// Example 1:
// Input:
// Items
// weight (kg): [1, 3, 4, 5]
// value ($): [1, 4, 5, 7]
// Knapsack size (bag size): 7 (kg)
// Output (find max profit):

/**
 * How to identify DP problem: choices given, optimal given (max profit in this case)
 * How to approach DP problem:
 *  Base condition - always think of smallest valid input
 *  Choice diagram - in this case using item.weight < knapsack.size - yes so have a choice to consider this item - try couple of items and make a choice diagram
 *  Choice diagram is recursive function (keep making input small)
 *
 * @param {number[]} weights
 * @param {number[]} values
 * @param {number} w - knapsackSize
 * @param {number} n - size of weights/values array
 * @return {number} max profit
 */
function knapsack(weights = [], values = [], w = 0, n = 0) {
  // Base condition - always think of smallest valid input
  if (n === 0 || w === 0) {
    return 0; // return 0 profit
  }

  // start checking (and removing) last item
  if (weights[n - 1] <= w) {
    // choice either include or not include
    // max of included or if not included (go to next one)
    return Math.max(
      values[n - 1] +
        memoizeKnapsack(weights, values, w - weights[n - 1], n - 1), // Include
      memoizeKnapsack(weights, values, w, n - 1) // Do not include
    );
  } else {
    return memoizeKnapsack(weights, values, w, n - 1);
  }
}

// Memoize for performance
function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

memoizeKnapsack = memoize(knapsack);

module.exports = memoizeKnapsack;
