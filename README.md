# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @hamanpreet/lotide`

**Require it:**

`const _ = require('@hamanpreet/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
1. head: takes an array as its argument and returns the first element of the array.

head([1, 2, 3]);    //returns 1 for [1, 2, 3]


assertArraysEqual: Takes two arrays as arguments and checks whether they are equal or not. If the two arrays are equal, the function returns true, otherwise it returns false.

assertArraysEqual([0, 1, 3], [0, 1, 3]);  // returns true


2. assertEqual: Takes two values as arguments and checks whether they are equal or not. If the two values are equal, the function returns true, otherwise it returns false.

assertEqual("Lighthouse","Lighthouse");   //returns true


3. assertObjectsEqual: Takes two objects as arguments and checks whether they are equal or not. If the two objects are equal, the function returns true, otherwise it returns false.

const multiColorShirtObject = { colors: ["red", "blue","green"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue","green"] };
assertObjectsEqual(multiColorShirtObject,anotherMultiColorShirtObject);    // returns true

4. countLetters:  Takes a string as its argument and returns an object with a count of each letter in the string.

countLetters("lighthouse in the house");
results["o"] === 2        // returns true

5. countOnly: Takes an array of strings and an object of items to count as its arguments, and returns an object with a count of each item in the array that is specified in the object.
6. eqArrays:
7. eqObjects:
8. findKeyByValue:
9. flatten:
10. letterPositions,
11. map,
12. middle,
13. tail,
14 takeUntil,
15. without
  