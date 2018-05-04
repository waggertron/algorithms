const { expect } = require('chai');
const switchFirstAndLastDigit = require('./switchFirstAndLastDigit.js');

describe('switch first and last digit', () => {
  it('should work with three digit number', () => {
    expect(switchFirstAndLastDigit(102)).to.be.eql(201);
  });
  it('should work with two digit number', () => {
    expect(switchFirstAndLastDigit(21)).to.be.eql(12);
  });
  it('should work with single digit number', () => {
    expect(switchFirstAndLastDigit(2)).to.be.eql(2);
  });
  it('should throw error if number not passed', () => {
    expect(() => switchFirstAndLastDigit()).to.throw();
  });
});
