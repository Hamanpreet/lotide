const eqObjects = require("./eqObjects.js");                 // importing the eqObjects function                 
const assertObjectsEqual = function(object1, object2) {        //
  const inspect = require('util').inspect;                     // importing the inspect function for objects
  if (eqObjects(object1, object2))
    console.log(`😁Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  else
    console.log(`😒Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
};

module.exports = assertObjectsEqual;                              // exporting the assertObjectsEqual function      