const tail = require('../tail');
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns [2, 5, 6]", () => {
    assert.deepEqual(tail([1, 2, 5, 6]), [2, 5, 6]); 
  });
});