const palindromes = function (...word) {
  const original = word;

  const palindrome = word.reverse();
  if (original == palindrome) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
