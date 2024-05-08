// Example 1:
// Input: array = [2,5,1,8,2,9,1], window max size (k)= 3
// Output: 19

/**
 * Time complexity: O(n) - Brute force has O(n2)
 *
 * @param {number[]} nums
 * @param {number} k
 */
function slidingWindowExample1(nums, k = 3) {
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

// Example 2: First negative integer in every window of size k
// Input: array = [12,-1,-7,8,-15,30,16,28], window max size (k)= 3
// Output: [-1, -1, -7, -15, -15, 0]
/**
 * Time complexity: O(n) - Brute force has O(n2)
 *
 * @param {number[]} nums
 * @param {number} k
 */
function slidingWindowExample2(nums, k = 3) {
  let i = 0;
  let j = 0;
  const result = [];
  const queue = [];

  while (j < nums.length) {
    // Add current element index (element won't work) in queue
    if (nums[j] < 0) {
      queue.push(j);
    }

    if (j - i + 1 === k) {
      if (queue.length > 0) {
        result.push(nums[queue[0]]);
      } else {
        result.push(0);
      }
      // Remove indices that are out of this window from the queue
      while (queue.length > 0 && queue[0] <= i) {
        // <= is must
        queue.shift();
      }
      i++;
    }
    j++;
  }

  return result;
}

// Example 3: Count occurrences of anagram
// For instance for, orf, rfo are anagrams
// Input: pattern = for, s = forxxxorfxxxdofr
// Output: 3 (for orf and ofr in s)
// Input: pattern = aaba, s = aabaabaa
// Output: 4 (Can see aaba(2 times), abaa(2 times))
/**
 * Time complexity: O(n) - Brute force has O(n2)
 *
 * @param {string} sentence
 * @param {string} pattern
 */
function slidingWindowExample3(sentence, pattern) {
  let result = 0;
  let i = 0; // Start index of the sliding window
  let j = 0; // End index of the sliding window
  const k = pattern.length;
  const patternCount = {};
  const windowCount = {};
  let matches = 0; // To track when the window matches the pattern character frequency

  // Initialize character frequency for the pattern
  for (let char of pattern) {
    patternCount[char] = (patternCount[char] || 0) + 1;
  }

  // Initialize matches count based on patternCount
  let patternDistinctCharsCount = Object.keys(patternCount).length;

  while (j < sentence.length) {
    // Add the current character from sentence to the window count
    const currentCharWithJ = sentence[j];
    if (currentCharWithJ in patternCount) {
      windowCount[currentCharWithJ] = (windowCount[currentCharWithJ] || 0) + 1;
      // When a character's count matches the pattern's count, increment matches
      if (windowCount[currentCharWithJ] === patternCount[currentCharWithJ]) {
        matches++;
      }
    }

    // Once the window size matches the pattern length, check for anagrams
    if (j - i + 1 === k) {
      // If all distinct characters matched their frequency, it's an anagram
      if (matches === patternDistinctCharsCount) {
        result++;
      }

      // Prepare to move the window
      const currentCharWithI = sentence[i];
      if (currentCharWithI in patternCount) {
        if (windowCount[currentCharWithI] === patternCount[currentCharWithI]) {
          matches--; // Decrement match count before modifying windowCount
        }
        windowCount[currentCharWithI]--;
      }

      i++; // Move the start of the window to the right
    }

    j++; // Move the end of the window to the right
  }

  return result;
}
module.exports = {
  slidingWindowExample1,
  slidingWindowExample2,
  slidingWindowExample3,
};
