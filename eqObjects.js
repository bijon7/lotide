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