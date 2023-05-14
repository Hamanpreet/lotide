const findKeyByValue = function(myObj, myValue) {            //This function returns value of key which matches the value argument
  let results;
  for (const k in myObj) {                                   //looping over myObj object that returns key, when the value is equal to given value
    if (myObj[k] === myValue) {
      return k;
    }
  }
  return results;                                             //if there is no value, return undefined
};

module.exports = findKeyByValue;                               // exporting the findKeyByValue function