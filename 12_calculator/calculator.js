const add = function (num1, num2) {
  return Number(num1 + num2);
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (num) {
  const result = num.reduce((acc, curr) => {
    return acc + curr;
  });
  return result;
};

const multiply = function (num1, num2) {
  return num1 * num2;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  if (num === 0 || num === 1) return 1;
  const arr = Array.from({ length: num }, (_, i) => i + 1);
  const result = arr.reduce((acc, curr) => acc * curr, 1);

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
