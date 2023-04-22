const eqArrays = function(arr1, arr2) {
  for(let i = 0; i < arr1.length; i++) {
 
    if(arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function(arr1, arr2) {
  if(eqArrays(arr1, arr2))
   console.log("Assertion paased");
  else
   console.log("Assertion failed");
};

const middle = function(arr) {
  let result = [];
  if((arr.length % 2) === 0) {
    let element = arr.length/2;
    result.push(arr[element - 1]);
    result.push(arr[element]);
  }
  else {
    let element = Math.floor(arr.length/2);
    result.push(arr[element]);
    //console.log(element);

  }
  return result;
}

const myInput = [1,2,3,4,5];
//console.log(middle(myInput));
//assertArraysEqual(middle(myInput), [2,3]);
//assertArraysEqual(middle(myInput), [2,3]);
//console.log(middle(myInput));
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);