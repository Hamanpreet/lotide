const assertEqual = require("../assertEqual.js");
const tail = require("../tail.js");
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
const result2 = tail([]);
assertEqual(result2[0], undefined);