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
    
    
   
    
const countOnly = function(allItems, itemsToCount) {
      const results = {};
      let count = 0;

  for (const item of allItems) {

   for (let key in itemsToCount) {
       
       if (item === key && itemsToCount[key] === true) {
         results[key] = count;
         count++;
       }
  }
}
    
    return results;
}
  
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log (result1);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Karima"], undefined);
