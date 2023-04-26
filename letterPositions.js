const assertArraysEqual = function(arr1, arr2) {
  if(eqArrays(arr1, arr2))
   console.log("Assertion passed");
  else
   console.log("Assertion failed");
};

const eqArrays = function(arr1, arr2) {
  for(let i = 0; i < arr2.length; i++) {
 
    if(arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const letterPositions = function(sentence) {
  results = {};
  for(let i = 0; i < sentence.length; i++) {
    
    if(results[sentence[i]]) {
      results[sentence[i]].push(i);
    }
    else {
      results[sentence[i]] = [i];
      
    }
  }
 return results;
};

var results = letterPositions("hello");
//console.log(eqArrays(results.h, [0,5]));

assertArraysEqual(results.h, [0,5]);
assertArraysEqual(results["l"], [2,3]);



  