const countLetters = function(sentence) {
  const results = {};
  let sentenceNew = sentence.replace(/ /g, " ");
  for (const letter of sentenceNew) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};



module.exports = countLetters;