const without = function(source, itemsToRemove) {
  const newArr = [];
  for (let i  = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArr.push(source[i]);
    }
  }
  return newArr;
};

module.exports = without;