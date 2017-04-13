var expect = require('chai').expect;
var asdJwk = require('../dist/index');

describe('asdJwk', function () {

  describe('encrypt', function () {
    it('should be a function', function () {
      expect(asdJwk.encrypt).to.be.a('function');
    });
    it('should return a string', function () {
      expect(asdJwk.encrypt()).to.be.a('string');
    });
  });

  describe('generateKey', function() {
    it('should be a function', function () {
      expect(asdJwk.generateKey).to.be.a('function');
    });
    it('should return a string', function () {
      expect(asdJwk.generateKey()).to.be.a('string');
    });
  })
});
