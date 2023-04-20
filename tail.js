const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`😁Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`😒undefined`);
};
const tail = function(arr) {
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");