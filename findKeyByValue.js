const findKeyByValue = function(myObj, myValue) {
  let results;
  for (const k in myObj) {
    if (myObj[k] === myValue) {
      return k;
    }
  }
  return results;
};

module.exports = findKeyByValue;