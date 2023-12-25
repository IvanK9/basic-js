const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (Array.isArray(arr)) {
    arr.map((el, index) => {
  if (el === '--discard-next') {
    arr.splice(index, 2);
  } else if (el === '--discard-prev') {
    arr.splice(index - 1, 2);
  } else if (el === '--double-next') {
    arr.splice(index, 2, arr[index + 1], arr[index + 1]);
  } else if (el === '--double-prev') {
    arr.splice(index - 1, 2, arr[index -1], arr[index - 1]);
  }
});
  return arr;
} else {
  throw new Error(`'arr' parameter must be an instance of the Array!`)
  // // return `'arr' parameter must be an instance of the Array!`;
  // return error.message;
  // return false;
}
}

module.exports = {
  transform
};
