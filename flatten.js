//flatten.js takes in an array which is consisted of elements some of which 
//happen to be arrays themselves. This program converts and merges the inner
//"type array elements" with regular elements and prints them out in a single
//new array. Assertions is made at the end of the program to check
//accuracy.

//Checks to see whether two arrays are equal objects.
const eqArrays = function (array1, array2) {
  let count = 0;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }

    }
    return true;
  }
}

const assertArraysEqual = function (actual, expected) {
  //Prints out corresponding messages based on whether the arguments
  //are equal or not.
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅Assertion Passed: ${actual} equals ${expected}!`)
  }
  else {
    console.log(`❌❌❌Assertion Failed:${actual} not equal ${expected}!`)

  }
}

const flatten = function (array) {
  const newArray = [];
  for (i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      for (j = 0; j < array[i].length; j++) {

        newArray.push(array[i][j]);
      }
    }
    else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
console.log(flatten([1, 2, [3, 4], 5, [6]]));
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 7]);

module.exports = flatten;

