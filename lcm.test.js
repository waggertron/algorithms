const expect = require('chai').expect;
const lcm = require('./lcm.js');

describe('lcm', () => {
  it('should work for lcm of two numbers', () => {
    expect(lcm(5, 10)).to.equal(10);
  });
  it('should work with more than two numbers', () => {
    expect(lcm(2, 5, 7)).to.eql(70);
  });
});
