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
  
  const eqArrays = function (array1, array2) {
    let count = 0;
    if (array1.length === array2.length) {
      for (let i = 0; i < array1.length; i++) {
        if ( array1 [i] !== array2 [i]) {
          return false;
        } else {
          count +=1 ;
        }
      }
      return true;
    }
  }
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), true);


  