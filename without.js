
  

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

const without = function (source, itemsToRemove) {
  //console.log ("newArray");
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    //console.log (newArray);
    for (let j = 0; j < itemsToRemove.length; j++) {
      
      //console.log (source[i],itemsToRemove[j]);
      if (source[i]!== itemsToRemove[j]) {
        newArray.push(source[i]);
        
      }
      
    }
  }
  return newArray;
}

 console.log (without([1, 2, 3], [1]));
  
  
  