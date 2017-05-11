require('babel-polyfill');

const HmacKeyGenerator = require('../dist/hmac-key-generator');
const t = require('tap');

t.test('HmacKeyGenerator', (t1) => {
  // some static test
  t1.type(HmacKeyGenerator, 'object', 'is an object');
  t1.type(HmacKeyGenerator.generateHmacKey, 'function', 'has a function generateHmacKey');

  t1.test('generateHmacKey', async (t2) => {
    // arrange
    const expectedSchema = {
      kty: 'oct',
      kid: /[a-zA-Z0-9-_]*/,
      use: 'sig',
      alg: 'HS256',
      k: /[a-zA-Z0-9-_]*/,
    };

    // act
    const key = await HmacKeyGenerator.generateHmacKey();

    // assert
    t2.match(key, expectedSchema, 'returns an object with expected schema');
    t2.end();
  });
  t1.end();
});
