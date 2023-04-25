const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`😁Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`😒Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(sentence) {
const results = {};
for(const letter of sentence) {
  //console.log(letter);
  if(results[letter]) {
    results[letter] += 1;
  }
  else {
    results[letter] = 1;
  }
}
  return results;
}

console.log(countLetters("lighthouse in the house"));
const results = countLetters("lighthouse in the house")
assertEqual(results["o"], 2);
assertEqual(results["l"], 1);