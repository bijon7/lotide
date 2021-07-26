// Program takes two arguments and compares if they are equal in value
const assertEqual = function(actual, expected) {
  //Prints out corresponding messages based on whether the arguments
  //are equal or not.
  
    if (actual=== expected) {
      console.log (`✅✅✅Assertion Passed: ${actual} === ${expected}!`)
    }
    else {
      console.log (`❌❌❌Assertion Failed:${actual} !== ${expected}!`)
  
    }

  }

  
  // Function returning first element of array. 

  const headOfArray = function (array) {

    let firstElement = array[0];
    return firstElement;

  }
// Verifies whether the first element does equal the input using numbers, strings
//single element array as well as an empty array.
  assertEqual(headOfArray([2,3,5]), 2);
  assertEqual(headOfArray(["Hello", "Lighthouse", "Labs"]), "Hello");
  assertEqual(headOfArray([2]), 2);
  assertEqual(headOfArray([]), 2);
