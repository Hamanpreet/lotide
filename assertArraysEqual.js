const eqArrays = function(arr1, arr2) {
  let para;
for(let i = 0; i < arr1.length; i++) {
  for(let y = 0; y < arr2.length; y++) {
    if(arr1[i] === arr2[y])
     para = true;
    else
     para = false
  }
}
return para;
};
const assertArraysEqual = function(arr1, arr2) {
  if(eqArrays(arr1, arr2))
   console.log("Arrays are equal");
  else
   console.log("Arrays are not same");
};
assertArraysEqual([1, 2, 3, 7], [1, 2, 3, 7]);