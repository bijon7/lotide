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

const assertArraysEqual = function (actual, expected) {
  //Prints out corresponding messages based on whether the arguments
  //are equal or not.
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅Assertion Passed: ${actual} equals ${expected}!`)
  }
  else {
    console.log(`❌❌❌Assertion Failed:${actual} not equal ${expected}!`)

  }
}

const without = function (source, itemsToRemove) {
  //console.log ("newArray");
  let newArray = [];
  let removedItemsArray = [];
  for (let i = 0; i < source.length; i++) {
     
    //console.log (newArray);
    for (let j = 0; j < itemsToRemove.length; j++) {

      //console.log (source[i],itemsToRemove[j]);
      if (source[i] === itemsToRemove[j]) {
        removedItemsArray.push(source[i]);

      } else {
        newArray.push(source[i]);
      }

    }
  }
  return newArray;
}


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
console.log(without([1, 2, 3], [3]));
console.log(without(words, ["lighthouse"]));

module.exports = without;