// const jose = require('node-jose');
// const ClientJWT = require('../dist/client-jwt');
require('babel-polyfill');
const ClientJwtBuilder = require('../dist/client-jwt-builder');
const t = require('tap');

t.test('ClientJwtBuilder', (t1) => {
  // some static test
  t1.type(ClientJwtBuilder, 'object', 'is an object');
  t1.type(ClientJwtBuilder.newClientJWT, 'function', 'has a function newClientJWT');

  t1.test('newClientJWT', (t2) => {
    t2.ok(ClientJwtBuilder.newClientJWT.length === 0, 'expects no arguments');

    // arrange

    // act
    const jwt = ClientJwtBuilder.newClientJWT();

    // assert
    t2.type(jwt, 'object', 'returns an object');

    t2.end();
  });
  t1.end();
});
