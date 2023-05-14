const flatten = function(arr) {                  //This function converts nested array to 1D array 
  let result = [];
  for (let i = 0; i < arr.length; i++) {            //check if there is nested array
    if (Array.isArray(arr[i])) {
      for (let y = 0; y < arr[i].length; y++) {
        result.push(arr[i][y]);                      //push the current element into resulting array
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result;                                     // return the resulting array
};



module.exports = flatten;                                //exporting the flatten function