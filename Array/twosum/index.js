// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

/**
 * Solution 1: Brute Force Approach
 * Time complexity: O(n2)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSumBruteForce(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

/**
 * Solution 2: Using two pointer approach
 * Time complexity: O(nlogn)
 *
 * First, the array is sorted, which has a time complexity of O(nlogn).
 * After sorting, two pointers are used to find the pair that sums to the target.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSumTwoPointers(nums, target) {
  // Convert array in to object and sort by value
  // Example: [{ value: 1, index: 0}, {value: 2, index: 1 }]
  nums = nums
    .map((value, index) => ({ value, index }))
    .sort((a, b) => a.value - b.value);
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left].value + nums[right].value;
    if (sum === target) {
      return [nums[left].index, nums[right].index];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}

/**
 * Solution 3: Using map
 * Time complexity: O(n)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  // This will store each number and its index.
  // Example: { '3': 0, '2': 1 }
  const numMap = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;
    if (complement in numMap) {
      return [numMap[complement], i];
    }
    numMap[num] = i;
  }
}

module.exports = twoSum;
