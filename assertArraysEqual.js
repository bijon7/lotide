// Program takes two arguments and compares if they are equal in value

  
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

  const assertArraysEqual = function(actual, expected) {
    //Prints out corresponding messages based on whether the arguments
    //are equal or not.
      if (eqArrays (actual, expected) === true) {
        console.log (`✅✅✅Assertion Passed: ${actual} equals ${expected}!`)
      }
      else {
        console.log (`❌❌❌Assertion Failed:${actual} not equal ${expected}!`)
    
    }
      }
  assertArraysEqual([1, 2, 3], [1, 2, 3]);
  assertArraysEqual([1, 2, 3], [1, 2, 4]);
  assertArraysEqual([1, 2, 3], [1, 2, "3"]);


  