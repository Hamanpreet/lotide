const tail = function(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};

module.exports = tail;