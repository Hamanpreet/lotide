const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`😁Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`😒Assertion Failed: ${actual} !== ${expected}`);
};

const eqObjects = function(object1, object2) {
 const keys1 = Object.keys(object1);
 const keys2 = Object.keys(object2);
 const val1 = Object.values(object1);
 const val2 = Object.values(object2);
 //console.log(!(keys1.includes(keys2)));
 if(!(keys1.includes(!keys2)) || keys1.length !== keys2.length) {
    return false;
 }
  else if(val1.includes(!val2)) {
    return false;
  }
  return true;
};
 
 


 const shirtObject = { size: "medium", color: "red" };
// const anotherShirtObject= { size: "medium", color: "red" };
// const results = eqObjects(shirtObject , anotherShirtObject);
// console.log(results);
// assertEqual(results, true);


const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
const results2 = eqObjects(shirtObject , longSleeveShirtObject);
console.log(results2);
assertEqual(results2, false);