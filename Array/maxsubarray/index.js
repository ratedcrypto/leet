// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Example 2:
// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

/**
 * Time complexity: O(n)
 *
 *
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArrayEasySolution(nums) {
  if (nums.length === 0) return 0;

  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

function maxCrossingSum(nums, left, mid, right) {
  let sum = 0;
  let leftMaxSum = -Infinity; // Use -Infinity as a starter, which handles negative numbers in the array.
  let rightMaxSum = -Infinity;

  // Calculate the maximum sum going left from mid to left
  for (let i = mid; i >= left; i--) {
    sum += nums[i];
    if (sum > leftMaxSum) {
      leftMaxSum = sum;
    }
  }

  sum = 0; // Reset sum for the right half calculation
  // Calculate the maximum sum going right from mid+1 to right
  for (let j = mid + 1; j <= right; j++) {
    sum += nums[j];
    if (sum > rightMaxSum) {
      rightMaxSum = sum;
    }
  }

  // The maximum crossing sum is the sum of left and right maximum sums
  return leftMaxSum + rightMaxSum;
}

function maxSubArrayUtil(nums, left, right) {
  if (left == right)
    // If the subarray has only one element
    return nums[left];

  // Find the middle point
  let mid = Math.floor((left + right) / 2);

  // Return the maximum of the following three possible cases:
  // a) Maximum subarray sum in the left half
  // b) Maximum subarray sum in the right half
  // c) Maximum subarray sum that crosses the mid
  return Math.max(
    maxSubArrayUtil(nums, left, mid),
    maxSubArrayUtil(nums, mid + 1, right),
    maxCrossingSum(nums, left, mid, right)
  );
}

/**
 * Time complexity: O(nlogn)
 *
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArrayDivideAndConquerSolution(nums) {
  return maxSubArrayUtil(nums, 0, nums.length - 1);
}

module.exports = maxSubArrayEasySolution;
