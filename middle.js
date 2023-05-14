const middle = function(arr) {                             //This function returns middle element of an array  
  if (arr.length === 0) {
    return undefined;
  }
  let result = [];
  if ((arr.length % 2) === 0) {
    let element = arr.length / 2;
    result.push(arr[element - 1]);                          //returns two elements for even length
    result.push(arr[element]);
  } else {
    let element = Math.floor(arr.length / 2);
    result.push(arr[element]);                               //returns one element for odd length
  }
  return result; 
};

module.exports = middle;                                      //exporting the middle function

