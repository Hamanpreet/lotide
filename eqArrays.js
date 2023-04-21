const assertEqual = function(a,x) {
  if (a === x)
    console.log(`😁Assertion Passed`);
  else
    console.log(`😒Assertion Failed`);
};
//assertEqual("Lighthouse","Bootcamp");
//assertEqual(1,4);
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
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), true);