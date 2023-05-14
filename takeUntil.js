const takeUntil = function(array, callback) {     //Function returns a "slice of the array with elements taken from the beginning.",keeps going until the callback returns a truthy value.
  let results = [];
  for (let item of array) {
    if (!(callback(item))) {
      results.push(item);                //pushes elements one by one till callback condition is met
    } else {
      return results;
    }
  }
  return results;                          //return results at the end
};

module.exports = takeUntil;       //exporting takeUntil function