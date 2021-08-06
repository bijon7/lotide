const takeUntil = function (array, callback) {
  let index = 0;

  for (let item of array) {
    // console.log(item);
    if (callback(item) === true) {
      //console.log(item);
      let index = array.indexOf(item);
      //console.log(index);
      return array.slice(0, index);

    }

  }


}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);