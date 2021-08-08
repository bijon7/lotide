
//This program compares two objects using a function called eqObjects and prints out an assertion
//statement.


//Compares two objects to see whether they're equal.
const eqObjects = function (object1, object2) {
  let count = 0;
  if (Object.keys(object1).length === Object.keys(object2).length)
    for (let i = 0; i < Object.keys(object1).length; i++) {
      if (Object.keys(object1)[i] !== Object.keys(object2)[i] ||
        Object.values(object1)[i] !== Object.values(object2)[i])
        return false;
    }
  return true;
}
const ab = { a: "1", b: "2" };
const ba = { a: "1", b: "2" };
console.log(eqObjects(ab, ba));

const assertObjectsEqual = function (actual, expected) {

  const inspect = require('util').inspect;
  //Prints out corresponding messages based on whether the arguments
  //are equal or not.
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}!`)
  }
  else {
    console.log(`❌❌❌Assertion Failed:${inspect(actual)} !== ${inspect(expected)}!`)

  }
}
assertObjectsEqual({ a: "1", b: "2" }, { a: "1", b: "2" });