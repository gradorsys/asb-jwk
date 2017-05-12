const jose = require('node-jose');
const JwkBuilder = require('../dist/jwk-builder');
const t = require('tap');

t.test('JwkBuilder', (t1) => {
  // some static test
  t1.type(JwkBuilder, 'object', 'is an object');
  t1.type(JwkBuilder.build, 'function', 'has a function build');

  t1.test('build', async (t2) => {
    t2.ok(JwkBuilder.build.length === 1, 'expects one argument');

    // arrange
    const keyStore = await jose.JWK.createKeyStore();
    const key = await keyStore.generate('RSA', 1024);
    const pem = key.toPEM(false);

    // act
    const jwk = await JwkBuilder.build(pem);

    // assert
    t2.match(jwk, key, 'returns the expected jwk');

    t2.end();
  });
  t1.end();
});
