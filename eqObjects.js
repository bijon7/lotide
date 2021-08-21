//This program compares two objects to see whether they're equal.
//*********************************************************************

//Compares an input value of a function with the expected result with a 
//true of false statement.

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

//Compares two objects to see whether they're equal.

const eqObjects = function (object1, object2) {

  const keysObject1 = Object.keys(object1)
  const keysObject2 = Object.keys(object2)
  
  if (keysObject1.length !== keysObject2.length) {
    return false;
  }

  //Looks for the same keys (regardless of their order of position in the objects) and decides if they objects are equal 
  //by checking the values of those keys.
  
  for (let i = 0; i < Object.keys(object1).length; i++) {
    
    const currentKey = keysObject1[i];
    if (object1[currentKey] !== object2[currentKey]) {
      return false;
    }
  }
  return true;
}
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

console.log(eqObjects(ab,ba));
console.log(eqObjects(ab, abc));

module.exports = eqObjects;



