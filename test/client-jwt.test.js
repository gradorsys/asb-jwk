require('babel-polyfill');
// const jose = require('node-jose');
const ClientJWT = require('../dist/client-jwt');
const HmacKeyGenerator = require('../dist/hmac-key-generator');
const t = require('tap');

t.test('ClientJWT', (t1) => {
  // some static test
  t1.type(ClientJWT, 'function', 'is a function');
  t1.ok(ClientJWT.length === 0, 'expecting no parameters');
  t1.test('new ClientJWT()', (t2) => {
    const jwt = new ClientJWT();
    const testAccessToken = 'testAccessToken';
    const testNonce = 'testNonce';
    const testTimestamp = 'testTimestamp';
    const testExpirationDate = 'testExpirationDate';
    const testKey = 'testKey';

    t2.type(jwt, 'object', 'is an object');
    t2.type(jwt.withAccessToken, 'function', 'has a function "withAccessToken"');
    t2.test('withAccessToken', (t3) => {
      t3.ok(jwt.withAccessToken.length === 1, 'expects 1 parameter');
      t3.ok(jwt.withAccessToken(testAccessToken) === jwt, 'can be chained');
      t3.end();
    });
    t2.type(jwt.withJWI, 'function', 'has a function "withJWI"');
    t2.test('withJWI', (t3) => {
      t3.ok(jwt.withJWI.length === 1, 'expects 1 parameter');
      t3.ok(jwt.withJWI(testNonce) === jwt, 'can be chained');
      t3.end();
    });
    t2.type(jwt.withIAT, 'function', 'has a function "withIAT"');
    t2.test('withIAT', (t3) => {
      t3.ok(jwt.withIAT.length === 1, 'expects 1 parameter');
      t3.ok(jwt.withIAT(testTimestamp) === jwt, 'can be chained');
      t3.end();
    });
    t2.type(jwt.withEXP, 'function', 'has a function "withEXP"');
    t2.test('withEXP', (t3) => {
      t3.ok(jwt.withEXP.length === 1, 'expects 1 parameter');
      t3.ok(jwt.withEXP(testExpirationDate) === jwt, 'can be chained');
      t3.end();
    });
    t2.type(jwt.withHmacKey, 'function', 'has a function "withHmacKey"');
    t2.test('withHmacKey', (t3) => {
      t3.ok(jwt.withHmacKey.length === 1, 'expects 1 parameter');
      t3.ok(jwt.withHmacKey(testKey) === jwt, 'can be chained');
      t3.end();
    });
    t2.type(jwt.build, 'function', 'has a function "build"');
    t2.test('build', async (t3) => {
      t3.ok(jwt.build.length === 1, 'expects 1 parameter');
      const testHMACKey = await HmacKeyGenerator.generateHmacKey();
      // console.log(JSON.stringify(testHMACKey));
      const jws = await jwt.build(testHMACKey);
      t3.type(jws, 'string', 'returns a string');
      // const x = await jose.JWS
      //   .createVerify(testHMACKey)
      //   .verify(jws);
      //   // .verify(jose.util.base64url.decode(jws));
      // console.log(JSON.stringify(x));
      t3.end();
    });
    t2.end();
  });


  t1.end();
});
