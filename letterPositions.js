const letterPositions = function(sentence) {
  let results = {};
  const sentenceN = sentence.replace(/ /g, "");
  for (let i = 0; i < sentenceN.length; i++) {
    //in this loop we r checking if there is already a key inside results, we can't use dot notation with that
    if (results[sentenceN[i]]) {
      results[sentenceN[i]].push(i);
    } else {
      results[sentenceN[i]] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;

  