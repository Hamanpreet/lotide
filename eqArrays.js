const eqArrays = function(arr1, arr2) {                //This function checks if two arrays are equal
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] || arr1.length !== arr2.length) {        // If the lengths not equal or ith element not equal, return false
      return false;
    }
  }
  return true;                                                // otherwise return true
};
module.exports = eqArrays;                                 // exporting the eqArrays function