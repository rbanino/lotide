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

function middle(array) {
  const middleArr = [];
  const al = array.length;
    if (al <= 2){
      return middleArr;
    } else if (al % 2 === 0) {
      middleArr.push(array[al/2 - 1]);
      middleArr.push(array[al/2]);
    
    } else {
      middleArr.push(array[Math.floor(al/2)]);
    }

  return middleArr
  }

console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 7, 4, 5])); // => [7]
console.log(middle([1, 3, 4])); // => [ 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]