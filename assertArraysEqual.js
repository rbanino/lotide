function eqArrays(array1, array2) {
  for( let i = 0; i < array1.length || i < array2.length; i++) {
    if(array1[i] !== array2[i]) {
    return false
    }
  } 
  return true
}

function assertArraysEqual(actual, expected){
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);