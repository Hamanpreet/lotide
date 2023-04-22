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
//assertArraysEqual([1, 2, 6, 7], [1, 2, 3, 7]);

const flatten = function(arr) {
  let result = [];
for(let i = 0; i < arr.length; i++) {
 if(Array.isArray(arr[i])) {
  for(let y = 0; y < arr[i].length; y++) {
    
    result.push(arr[i][y]);
   
   console.log("s");
   }
  }
  else
  result.push(arr[i]);
 }
 return result;
};

const arr = [1,2,[3, 4],5,[6]];
console.log(flatten(arr));