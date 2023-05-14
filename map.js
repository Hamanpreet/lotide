const map = function(array, callback) {             //This function takes an array and returns after performing callback on it
  const results = [];
  for (let item of array) {                        //loop over array to perform callback on each item
    results.push(callback(item));
  }
  return results;                                  // return results
};


module.exports = map;                               //exporting the map function