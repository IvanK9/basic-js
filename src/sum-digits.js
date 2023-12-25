const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sumNum = 0;
  sum(n);
  function sum(n) {
  sumNum = 0;
    let arrString = n.toString().split('');
    for (let item of arrString) {
      sumNum += +item;
    }
    return sumNum;
  }
  return (sumNum <= 9) ? sumNum : sum(sumNum);
}

module.exports = {
  getSumOfDigits
};
