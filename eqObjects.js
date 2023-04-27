const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`😁Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`😒Assertion Failed: ${actual} !== ${expected}`);
};
const eqArrays = function(arr1, arr2) {
  for(let i = 0; i < arr1.length; i++) {
 
    if(arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
 const keys1 = Object.keys(object1);
 const keys2 = Object.keys(object2);
 const val1 = Object.values(object1);
 const val2 = Object.values(object2);
 //console.log(val1);
 //console.log(val2);
 
  if(keys1.length !== keys2.length) {
    return false;
  }
  for(const key of keys2) {
    if(!(keys1.includes(key))) {
    console.log(keys1.includes(key));
    return false;
    }
  }
  for(let key1 in object1) {
    if(Array.isArray(object1[key1]) && Array.isArray(object2[key1])) {
    //console.log(innerVal1, innerVal2);
    return eqArrays(object1[key1], object2[key1]);
    }
    // console.log(val1.includes(val));
   else if(typeof object1[key1] === typeof object2[key1]){
    return object1[key1] === object2[key1];
   }
   else {
    return false;
    }
 }
 
};
 
 


const shirtObject = { size: "medium", color: "red" };
const anotherShirtObject= { size: "medium", color: "red" };
// const results = eqObjects(shirtObject , anotherShirtObject);
// //console.log(results);
//  assertEqual(results, true);


// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// const results2 = eqObjects(shirtObject , longSleeveShirtObject);
// //console.log(results2);
// assertEqual(results2, false);

const multiColorShirtObject = { colors: ["red", "blue","green"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const results = eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject);
console.log(results);
assertEqual(results, false);

// const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// const results2 = eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject);
// assertEqual(results2, false);
