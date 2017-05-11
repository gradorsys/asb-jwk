require('babel-polyfill');

const jose = require('node-jose');
const t = require('tap');
const SecretCredentialEncryptor = require('../dist/secret-credential-encryptor');

const jweRegex = /^[a-zA-Z0-9\-_]+?(?:\.[a-zA-Z0-9\-_]+){4}$/;

t.test('SecretCredentialEncryptor', (t1) => {
  // some static test
  t1.type(SecretCredentialEncryptor, 'object', 'is an object');
  t1.type(SecretCredentialEncryptor.encrypt, 'function', 'has a function encrypt');

  t1.test('encrypt', (t2) => {
    // static test
    t2.ok(SecretCredentialEncryptor.encrypt.length === 2, 'expects 2 parameters');

    // arrange
    const keyStore = jose.JWK.createKeyStore();
    const secret = 'secretData';

    t2.test('called with "RSA" key', async (t3) => {
      // arrange
      const key = await keyStore.generate('RSA', 2048);
      // act
      const jwe = await SecretCredentialEncryptor.encrypt(secret, key);
      // assert
      t3.match(jwe, jweRegex, 'result matches a jwe');
      t3.end();
    });

    t2.test('called with "oct" key', async (t3) => {
      // arrange
      const key = await keyStore.generate('oct', 256);
      // act
      const jwe = await SecretCredentialEncryptor.encrypt(secret, key);
      // assert
      t3.match(jwe, jweRegex, 'result matches a jwe');
      t3.end();
    });

    t2.end();
  });
  t1.end();
});
