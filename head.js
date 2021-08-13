//const assertEqual = require('./assertEqual');

// Function returning first element of array. 

const headOfArray = function (array) {

  let firstElement = array[0];
  return firstElement;

}
module.exports = headOfArray;

// Verifies whether the first element does equal the input using numbers, strings
//single element array as well as an empty array.
// assertEqual(headOfArray([2,3,5]), 2);
// assertEqual(headOfArray(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(headOfArray([2]), 2);
// assertEqual(headOfArray([]), 2);

const testOne = function (letter) {
  return letter;
}

b = testOne ("a");
console.log (b);

const testSecond = function (letter) {
    let s = letter;
    console.log (s);
}

console.log(testSecond("m"));

testSecond ("m");


