const without = function(source, itemsToRemove) {         //function returns all the items except the itemsToRemove
  const newArr = [];
  for (let i  = 0; i < source.length; i++) {  
    if (!itemsToRemove.includes(source[i])) {
      newArr.push(source[i]);                            
    }
  }
  return newArr;                               //returns the newArr at the end
};

module.exports = without;                      // exports the without function