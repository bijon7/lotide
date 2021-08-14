//This program takes in an object and a callback. It scans the object and return the first key 
 //for which the callback returns a truthy value. 
  

const findKey = function (object, callback) {
  for (let keyName in object) {
    //console.log(object[keyName]);
    if (callback(object[keyName])) {

      return keyName;
    }
  }
}

testValue = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2)
console.log(testValue);

module.exports = findKey;






