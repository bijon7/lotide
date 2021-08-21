//letterPositions returns all the indices (zero-based positions)
//in the string where each character is found.
const letterPositions = function (word) {
  const result = {};

  //Converts the string to an array for iteration purposes.
  const letters = word.split("");

  //A given letter searches for its next ocuurance (if any) by iteration through which the given letter
  //is compared with every single letter in the array.
  
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === " ") {
      continue;
    }
    let indexes = [];
    for (let j = 0; j < letters.length; j++) {

      if (letters[j] === letters[i]) {

        indexes.push(j);
      }
    }

    //the indexes array is the value of key of the result object which in turn represents the number of ocuurances of
    //each letter.

    result[letters[i]] = indexes;
}


  return result;

}

//test
console.log(letterPositions("lighthouse labs"));

module.exports = letterPositions;

