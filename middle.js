
//middle.js program takes in an array and 
//returns the middle-most element(s) of the given array.


const assertEqual = function (actual, expected) {
  //Prints out corresponding messages based on whether the arguments
  //are equal or not.
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}!`)
  }
  else {
    console.log(`❌❌❌Assertion Failed:${actual} !== ${expected}!`)

  }
}

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

const middle = function (array) {
  let middleElementArray = [];
  let i = 0;
  let middleElementOne = 0;
  let middleElementTwo = 0;
  let middleElement = 0;

  if (array.length <= 2) {
    return [];
  }

  if (array.length % 2 === 0) {
    middleElementOne = array[(array.length / 2) - 1];
    middleElementTwo = array[array.length / 2];
    middleElementArray.push(middleElementOne);
    middleElementArray.push(middleElementTwo);

  } else {
    middleElement = array[Math.floor((array.length / 2) + 1)];
    middleElementArray.push(middleElement);

  }
  return middleElementArray;

}
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3]));
console.log(middle([1]));