module.exports = function lcm(...nums) {
  function gcd(a, b) {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  }
  const gcdAll = nums.reduce(gcd);
  return (nums.reduce((a, b) => a * b)) / gcdAll;
};

