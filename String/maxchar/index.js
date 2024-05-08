// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {};

  let max = 0;
  let maxChar = "";

  for (let c of str) {
    chars[c] = (chars[c] || 0) + 1;
  }

  for (let c in chars) {
    if (chars[c] > max) {
      max = chars[c];
      maxChar = c;
    }
  }

  return maxChar;
}

module.exports = maxChar;
