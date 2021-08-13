const assertArraysEqual = require('./assertArraysEqual.js');




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
    middleElement = array[Math.floor((array.length / 2)) + 1];
    middleElementArray.push(middleElement);

  }
  return middleElementArray;

}
// console.log(middle([1, 2, 3, 4]));
// console.log(middle([1, 2, 3]));
// console.log(middle([1]));

module.exports = middle;