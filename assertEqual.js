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

// TEST CODE

module.exports = assertEqual;
