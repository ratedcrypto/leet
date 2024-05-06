// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:
// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

/**
 * Time complexity: O(n)
 * Space complexity: O(n)in worst case,
 * where n is the number of elements in the array,
 * because in the worst case, all elements are stored in the set
 *
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  const seen = new Set(); // Create a new hash set

  for (let num of nums) {
    if (seen.has(num)) {
      return true; // If the number is already in the set, return true
    }
    seen.add(num); // Otherwise, add the number to the set
  }

  return false; // Return false if no duplicates are found
}

module.exports = containsDuplicate;
