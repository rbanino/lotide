const assertEqual = function(actual, expected) {
  if (expected === actual) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (string) {
  const results = {};
  for (const letter of string) {
    if(letter !== ' ') {
     if(results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
      }
  }
  } 
  return results
}

console.log(countLetters('lighthouse in the house'));