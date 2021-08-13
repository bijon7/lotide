// Program takes two arguments and compares if they are equal in value

const eqArrays = require('./eqArrays.js');


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
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3], [1, 2, 4]);
// assertArraysEqual([1, 2, 3], [1, 2, "3"]);

module.exports = assertArraysEqual;


