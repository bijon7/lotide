# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @bijon7/lotide`

**Require it:**

`const _ = require('bijon7/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

function assertArraysEqual: The program takes two arrays as arguments and compares if they are equal in value through assertion.
function assertEqual:  Program takes two primitive values as arguments and compares if they are equal in value.
function assertObjectsEqual: This program compares two objects using a function called eqObjects and prints out an assertion statement.
function countLetters: The function takes in a sentence (as a string) and then returns a count of each of the letters in that sentence.
function countOnly: This program counts a specific set of numbers in an array and returns a new array with those numbers.
function eqArrays: This function compares two arrays as arguments and returns true if they are identical in terms of elements and length.
function eqObjects: Compares two objects to see whether they're equal.
function findKey: This program takes in an object and a callback. It scans the object and return the first key for which the callback returns a truthy value.
function findKeyByValue: his program takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that
given value is found, then it should return undefined.

function flatten: flatten.js takes in an array which is consisted of elements some of which happen to be arrays themselves. This program converts and merges the inner
"type array elements" with regular elements and prints them out in a single new array. Assertions is made at the end of the program to check accuracy.

function head: This program takes an array as an input and returns the first element.

File index.js: All functions are all in one place to be exported as part of an object.

function letterPositions: Returns all the indices (zero-based positions) in the string where each character is found.
function map: This program takes an array and a callback as arguments and performs operations on every single element of the array directed by the callback.
function middle: Returns the middle element of a given array. A single value is returned for an odd numbered given array and two middle elements are returned
for an even numbered given array.
function tail: Returns a new array without the first element of the existing array.
function takeUntil: This program takes in array and a callback as arguments and returns a new array which is practically a segment of the old array which begins at the first element and ends right before the element that has a
true return value of the callback function.
function without: Returns a subset of a given array, removing unwanted elements.




