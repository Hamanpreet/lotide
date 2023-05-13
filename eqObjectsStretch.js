const eqArrays = require("../lotide/eqArrays.js");

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys2) {
    if (!(keys1.includes(key))) {
      return false;
    }
  }
  for (let key1 in object1) {
    if (Array.isArray(object1[key1]) && Array.isArray(object2[key1])) {
      
      return eqArrays(object1[key1], object2[key1]);
    } else if (typeof object1[key1] === "object" && typeof object2[key1] === "object") {
      if (!eqObjects(object1[key1], object2[key1])) {
        return false;
      } else if (object1[key1] !== object2[key1]) {
        return false;
      }
    }
  }
  return true;
};
const results = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })

console.log(results);


module.exports = eqObjects;