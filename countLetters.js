const countLetters = function(sentence) {                  // this function returns a count of each of the letters in that sentence.
  const results = {};                                
  let sentenceNew = sentence.replace(/ /g, " ");          //removing the spaces from the input string
  for (const letter of sentenceNew) {
    if (results[letter]) {
      results[letter] += 1;                                //if the results object already has that specific letter key in it, add 1 
    } else {
      results[letter] = 1;                                 // if the key doesn't exist, make the key and set its value to 1
    }
  }
  return results;                                          // return the resulting results object
};



module.exports = countLetters;                             // exporting the countLetters function