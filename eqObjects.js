const eqArrays = require("./eqArrays.js");                    // exporting the assertObjectsEqual function

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);                //arrays of all the keys in object1
  const keys2 = Object.keys(object2);
  
  if (keys1.length !== keys2.length) {                //if the keys length are not equal, return false
    return false;
  }
  for (const key of keys2) {                           //loop over keys2 to check if keys1 includes that element
    if (!(keys1.includes(key))) {                      //return false, if doesn't include
      return false;
    }
  }
  for (let key1 in object1) {
    if (Array.isArray(object1[key1]) && Array.isArray(object2[key1])) {            //checking if values are arrays
      return eqArrays(object1[key1], object2[key1]);                               // calling eqArrays function to check equality
    } else if (typeof object1[key1] === typeof object2[key1]) {                    // if type of the values are equal, return true if theu=y are strict equal
      return object1[key1] === object2[key1];
    } else {
      return false;                                                                //otherwise return false
    }
  }
};



module.exports = eqObjects;                                        // exporting the eqObjects function