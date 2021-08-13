const assertEqual = require('./assertEqual');
  //Defines a function that creates a new array without the first element of the
  //existing array.

  const tail = function (array) {

    const newArray = [];
//New array starts taking values from index 1 of the existing array until
//it goes over all the elements.
  for (let i = 1; i < array.length; i++) {
    newArray.push (array [i]);
  }
  return newArray;
  }
//Test case with regular array, an array with one element and an empty array.
  // console.log (tail ([1,2,3]));
  // console.log (tail ([1]));
  // console.log (tail ([]));

  // Test Case: Check the original array 
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
 module.exports = tail;