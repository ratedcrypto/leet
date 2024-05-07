// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105
/**
 * Time Complexity: 𝑂(𝑛2) The array is traversed by i and for each i, the two pointers can traverse the rest of the array in O(n).
 * Space Complexity:O(1) or O(n) depending on the implementation of the sort in JavaScript. If we consider the space required for the result, it would depend on the number of triplets found.
 *
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  let answer = [];

  // if the size of the nums is less than 3 return
  if (nums.length < 3) {
    return answer;
  }

  for (let i = 0; i < nums.length; i++) {
    // if num[i] > 0 break the loop because there cannot be any triplets that sum to zero when the first element is positive
    if (nums[i] > 0) {
      break;
    }

    // duplicate check
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // two pointer approach
    let left = i + 1; // next element
    let right = nums.length - 1; // end of the array
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum > 0) {
        right--; // sum is higher and array is sorted so decrement high pointer
      } else if (sum < 0) {
        left++; // sum is lower and array is sorted so decrement low pointer
      } else {
        // found
        answer.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++; // Skip duplicates
        while (nums[right] === nums[right - 1]) right--; // Skip duplicates
        left++;
        right--;
      }
    }
  }
  return answer;
}

module.exports = threeSum;
