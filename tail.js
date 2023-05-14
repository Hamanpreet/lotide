const tail = function(arr) {                 //This function returns the all the elements except the fiest element of array
  if (arr.length === 0) {
    return undefined;                            //returns undefined if the array is empty
  }
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {           //pushes all the elements except the first element
    newArr.push(arr[i]);
  }
  return newArr;
};

module.exports = tail;                             // exporting the tail function