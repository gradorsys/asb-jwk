const NonceGenerator = require('../dist/nonce-generator');
const t = require('tap');

t.test('NonceGenerator', (t1) => {
  // some static test
  t1.type(NonceGenerator, 'object', 'is an object');
  t1.type(NonceGenerator.generateNonce, 'function', 'has a function generateNonce');

  t1.test('generateNonce', (t2) => {
    // arrange
    const sampleSize = 100;

    // act
    const nonces = [...Array(sampleSize).keys()].map(() => NonceGenerator.generateNonce());

    // assert
    t2.ok(nonces.reduce((aggregate, nonce) => (
      aggregate
      && typeof nonce === 'number'
      && nonce === Math.ceil(nonce)
      && nonce >= 0
      && nonce < 2 ** 32
    ), true), 'returns always an unsinged int32');
    t2.ok([...new Set(nonces)].length / sampleSize > 0.9, 'returns different values when called several times');
    t2.end();
  });
  t1.end();
});
