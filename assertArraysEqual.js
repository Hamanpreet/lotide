const eqArrays = require("./eqArrays.js");      // importing the eqArrays function
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2))                      //Comparing arrays using eqArrays
    console.log(`Assertion passed ${arr1} === ${arr2}`);
  else
    console.log(`Assertion failed ${arr1} !== ${arr2}`);
};

module.exports = assertArraysEqual;                 // exporting the function so that it can be used by the user.