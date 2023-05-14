const letterPositions = function(sentence) {                     //This function which will return all the indices (zero-based positions) in the string where each character is found.
  let results = {};
  const sentenceN = sentence.replace(/ /g, "");
  for (let i = 0; i < sentenceN.length; i++) {
    //in this loop we r checking if there is already a key inside results, we can't use dot notation with that, push index in results
    if (results[sentenceN[i]]) {
      results[sentenceN[i]].push(i);
    } else {
      results[sentenceN[i]] = [i];          //If the key doesn't exist, set the value of the current index
    }
  }
  return results;                           //return results object
};

module.exports = letterPositions;             //exporting  letterPositions function

  