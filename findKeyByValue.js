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
