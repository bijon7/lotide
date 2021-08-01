const countLetters = function (word){
  const result = {};
  const letters = word.split("");
  for (const el of letters) {
    if ( el === " ") {
      continue;
    }
    console.log ("before", el,result[el]);
    if (result[el]) {
      result[el]+= 1;
    } else { 
      result[el]= 1;
    }
    //result[el] = result[el] || 0;
    //result[el] +=1;
    console.log ("after", el, result[el]);
  }
  return result;
}
const testResult = countLetters("lighthouse in the house");
console.log(testResult);