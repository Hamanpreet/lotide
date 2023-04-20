const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`😁Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`😒undefined`);
};
function head(arr)
{
 return arr[0];
}
assertEqual(head([]), 5);
assertEqual(head(["Hello"]), "Hello");