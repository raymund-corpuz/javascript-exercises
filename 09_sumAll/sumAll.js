const sumAll = function (start, end) {
  let total = 0;
  for (let i = start; i <= end; i++) {
    total += i;
  }
  return total;
};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
