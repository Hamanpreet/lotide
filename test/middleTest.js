const middle = require("../middle.js");
const assertArraysEqual = require("../assertArraysEqual.js");

const myInput = [1,2,3,4,5];
assertArraysEqual(middle(myInput), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);