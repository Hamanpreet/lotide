const head = require("../head.js");
const assertEqual = require("../assertEqual.js");


assertEqual(head([]), undefined);
assertEqual(head([1, 2, 3, 4, 5]), 5);
assertEqual(head(["Hello", "World"]), "Hello");