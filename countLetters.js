//The function takes in a sentence (as a string) and then return
//a count of each of the letters in that sentence.

const countLetters = function (word){
  const result = {};
  const letters = word.split("");
  for (const el of letters) {
    if ( el === " ") {
      continue;
    }
    
    if (result[el]) {
      result[el]+= 1;
    } else { 
      result[el]= 1;
    }
    //result[el] = result[el] || 0;
    //result[el] +=1;
    
  }
  return result;
}
const testResult = countLetters("lighthouse in the house");
console.log(testResult);