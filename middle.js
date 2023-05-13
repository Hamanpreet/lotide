const middle = function(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  let result = [];
  if ((arr.length % 2) === 0) {
    let element = arr.length / 2;
    result.push(arr[element - 1]);
    result.push(arr[element]);
  } else {
    let element = Math.floor(arr.length / 2);
    result.push(arr[element]);
  }
  return result;
};

module.exports = middle;

