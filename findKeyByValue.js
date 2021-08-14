//This program takes in an object and a value. It should scan the object
//and return the first key which contains the given value. If no key with that
//given value is found, then it should return undefined.


findKeyByValue = function (obj, value) { 
  
  for (let element in obj) {
   if (obj[element] === value) {
      return element;
    }
  }
  
  return undefined;
  
}
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire" ));

module.exports = findKeyByValue;
