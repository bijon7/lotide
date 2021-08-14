//const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const headOfArray = require('../head.js');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(headOfArray([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(headOfArray(['5']), '5'); 
  });
});