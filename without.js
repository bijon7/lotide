//This program takes in two arrays and removes item from the first array based on the requested element from
//the second array and ends up storing the result in a new array with the requested items removed. Original array
//remains unchanged.
/*******************************************************************************************************************/

//The following function compares two different arrays and returns true if they're equal.
const eqArrays = function (array1, array2) {
  let count = 0;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      } else {
        count += 1;
      }
    }
    return true;
  }
}


//Assert function to test expected result from another fucntion. It verifies the given input with an expected
//value.
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



const without = function (source, itemsToRemove) {

  let removedItemsArray = [];

  // Compares each element from both arrays with each other and adds item to a new array
  //from the first array if the item from the first array does not match with any element from the
  //second (itemsToRemove) array.

  for (let i = 0; i < source.length; i++) {

    for (let j = 0; j < itemsToRemove.length; j++) {

      if (source[i] !== itemsToRemove[j]) {
        removedItemsArray.push(source[i]);

      }

    }
  }
  return removedItemsArray;
}

// test
const words = ["hello", "world", "lighthouse"];
console.log(without([1, 2, 3], [3]));
console.log(without(words, ["lighthouse"]));
console.log(without([1, 2, 3], [1]));

//test to see whether the original array is unchanged.
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;