const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const headOfArray = require('../head.js');
// Verifies whether the first element does equal the input using numbers, strings
//single element array as well as an empty array.
// assertEqual(headOfArray([2, 3, 5]), 2);
// assertEqual(headOfArray(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(headOfArray([2]), 2);
// assertEqual(headOfArray([]), 3);
describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});