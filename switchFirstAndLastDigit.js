module.exports = function switchFirstAndLastDigit(num) {
  if (num !== 0 && !num) {
    throw new Error();
  }
  const numString = String(num);
  if (numString.length < 2) {
    return num;
  }
  const switched = numString[numString.length - 1] + numString.slice(1, numString.length - 1) + numString[0];
  return parseInt(switched);
};
