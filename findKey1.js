const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`😁Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`😒Assertion Failed: ${actual} !== ${expected}`);
};
const findKey = function(myObj, callback) {
  for (let key in myObj) {
    // console.log(key);
    //console.log(myObj[key]);
    
    if(callback(myObj[key])) {    //This is a nested object
      
      // console.log(myObj[key]);
      return key;
    }
  }
}

const results = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3)
console.log(results);
assertEqual(results, "Akaleri");