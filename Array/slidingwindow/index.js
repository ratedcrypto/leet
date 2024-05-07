// Example 1:
// Input: array = [2,5,1,8,2,9,1], window max size (k)= 3

/**
 * Time complexity: O(n) - Brute force has O(n2)
 *
 * @param {number[]} nums
 * @param {number} k
 */
function slidingWindow(nums, k = 3) {
  let i = 0;
  let j = 0;
  let sum = 0;
  let max = 0;

  while (j < nums.length) {
    sum += nums[j];
    if (j - i + 1 === k) {
      // because j - i is 1 short of a window size
      max = Math.max(max, sum);
      sum -= nums[i];
      i++;
    }
    j++;
  }

  return max;
}

module.exports = slidingWindow;
