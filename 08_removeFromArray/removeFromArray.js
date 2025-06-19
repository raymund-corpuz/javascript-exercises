function removeFromArray(array, ...toRemove) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (!toRemove.includes(array[i])) {
      result.push(array[i]);
    }
  }

  return result;
}

console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
