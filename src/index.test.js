const { expect } = require('chai');
const { describe, it } = require('mocha');

// eslint-disable-next-line no-unused-vars
const { adder, greeter } = require('../dist/index');

describe('adder', () => {
  it('should calculate the sum of 2 numbers', () => {
    expect(adder(3, 5)).to.equal(8);
  });
});

// describe('greeter', () => {
//   it('should greet the specified name', () => {
//     const name = 'goo';
//     const result = greeter('goo');
//     expect(result).to.be.a('string');
//     expect(result).to.equal(`Hallo ${name}`);
//   });
// })
