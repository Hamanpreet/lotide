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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
 const results = [];
 // console.log("array: ", array);
 // console.log("callback: ", callback);
 for (let item of array) {
  // console.log("item before: ", item);
  // console.log("item AFTER: ", callback(item));
  // console.log("-----");
  results.push(callback(item));
 }
 return results;
}

const results2 = map(words, word => word[0]);
console.log(results2); 
assertArraysEqual(results2, ['g', 'c', 't', 'm', 't']);