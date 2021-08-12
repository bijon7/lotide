const assertEqual = require('../assertEqual');
const headOfArray = require('../head.js');
// Verifies whether the first element does equal the input using numbers, strings
//single element array as well as an empty array.
assertEqual(headOfArray([2, 3, 5]), 2);
assertEqual(headOfArray(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(headOfArray([2]), 2);
assertEqual(headOfArray([]), 3);