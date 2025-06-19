const leapYears = function (year) {
  //a year is a leap Year if it is divisible by 4 and divisible by 400

  if (year % 4 !== 0 && year % 400 !== 0) {
    return false;
  } else {
    return true;
  }
};
console.log(leapYears(2012));
// Do not edit below this line
module.exports = leapYears;
