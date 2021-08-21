//This program takes in an array and returns the middle element(s) in a new array. If the given array has odd number
//of elements, then the middle element is the number that resides exactly in middle of the array. If the array has 
//even number of elements, then the middle elements are the TWO middle elements. The program returns an empty array
//if there's only one given element in the passed agrument array.

const assertArraysEqual = require('./assertArraysEqual.js');

const middle = function (array) {
  let middleElementArray = [];
  let middleElementOne = 0;
  let middleElementTwo = 0;
  let middleElement = 0;

  //Returns empty array for a single elemnt given input array.
  if (array.length <= 2) {
    return [];
  }

  if (array.length % 2 === 0) {
    middleElementOne = array[(array.length / 2) - 1];
    middleElementTwo = array[array.length / 2];
    middleElementArray.push(middleElementOne);
    middleElementArray.push(middleElementTwo);

  } else {
    middleElement = array[Math.floor((array.length / 2))];
    middleElementArray.push(middleElement);

  }
  return middleElementArray;

}
console.log(middle([1, 2, 3, 4, 5, 2]));
console.log(middle([1, 2, 3, 7, 9]));
console.log(middle([1]));

module.exports = middle;