const middle = require('../middle.js');
//const assertArraysEqual = require('../assertArraysEqual.js');
const assert = require('chai').assert;
//assertArraysEqual(middle([1, 2, 3, 4]), [2,3]);

describe("#middle", () => {
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});