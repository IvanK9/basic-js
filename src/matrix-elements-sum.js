const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  let skip = matrix[0].length;
  let arrNum = matrix.flat();
  arrNum.map((el, index) => {
           if (el === 0) {
      arrNum.splice(index + skip, 1, 0);
     }
             sum += el;
  });
    return sum;
}

module.exports = {
  getMatrixElementsSum
};
