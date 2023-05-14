const countOnly = function(allItems, itemsToCount) {      //This function when given an array and an object. It will return an object containing counts of everything that the input object listed.
  const results = {};
  for (const item of allItems) {                         //looping over the elements of allItems to filter the elements using if statement 
    if (itemsToCount[item]) {
      if (results[item]) {                                //if the results object already has that specific letter key in it, add 1
        results[item] += 1;
      } else {
        results[item] = 1;                                 // if the key doesn't exist, make the key and set its value to 1
      }
    }
  }
  return results;                                            // return the resulting results object
};

module.exports = countOnly;                                  // exporting the countOnly function