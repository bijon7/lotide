const letterPositions = function (word) {
  const result = {};

  const letters = word.split("");
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
    result[letters[i]] = indexes;
  }


  console.log(result);//

}

letterPositions("lighthouse labs");

