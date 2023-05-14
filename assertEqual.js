const assertEqual = function(actual, expected) {                         //function checks if two parameters are equal or not
  if (actual === expected)
    console.log(`😁Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`😒Assertion Failed: ${actual} !== ${expected}`);
};

module.exports = assertEqual;                                         // exporting the function so that it can be used by the user.
