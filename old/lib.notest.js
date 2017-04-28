// require("babel-polyfill");
const expect = require('chai').expect;
const { describe, it } = require('mocha');
// const td = require('testdouble')

// const WebCrypto = require('node-webcrypto-ossl');
// const webcrypto = new WebCrypto();
// global.crypto = webcrypto;

// const { Jose, JoseJWE } = require('jose-jwe-jws');

const myLib = require('../dist/index');
// const { adder } = myLib({Jose, JoseJWE});
// eslint-disable-next-line no-unused-vars
const { adder, greeter } = myLib();
// const { jwk2cryptoKey, transformData, adder } = myLib({Jose, JoseJWE});

// const jwk = {
//   kty: 'RSA',
//   e: 'AQAB',
//   x5t: 'jeylBXdohTJCn6a87uvMHj-p7_k',
//   kid: 'imdznevy-3vujwmkq7vyrgwhubzrm3-cylz36-zy9l4',
//   x5c: [
//     {}
//   ],
// eslint-disable-next-line max-len
//   n: 'yrotRAjpvGfhCnR0Sf0pyU4cxAyDVH8li_9zU1FDlkjNlrGdlHDHn2PwiUz1h2kwi4ZeEoaGn2_qcQjbk7_KpGFyHxE_32Lsknk04YKjqp3BeNqDUDBXUBqZR7qKGQYxeY7UK6z38iRPguLPN8e2u98wJJPkeIf3J4c4748Agj72TWCW2AOdnaFPry_qSERAKTrCTNmj_w5Q-Z6sLfIsuNwFpfnXN7_0qlup9y0ez9EBcqoF-WNxkMrVRMeswwjSLSjjQxoLxVKbJ98yIxrjbS0--XWG6laDf1Wn0LPn4IoJIpfDdnnMbkFsbmpGr_Wa5p7YTOUShgEkmiqeRQ446w'
// }
// const testData = JSON.stringify({
//   bla: 'hi',
//   blub: 5,
// });

describe('adder', () => {
  it('should calculate the sum of 2 numbers', () => {
    expect(adder(3, 5)).to.equal(8);
  });
});

// describe('greeter', function () {
//   it('should greet the specified name', function () {
//     const name = 'goo';
//     const result = greeter('goo');
//     expect(result).to.be.a('string');
//     expect(result).to.equal(`Hallo ${name}`);
//   })
// })

// describe.skip('asb-jwk', function () {
//   describe('jwk2cryptoKey', function () {
//     it('should be a function', function () {
//       expect(jwk2cryptoKey).to.be.a('function');
//     });
//     it('should return object', async function () {
//       const ck = await jwk2cryptoKey(jwk);
//       expect(ck).to.be.a('object');
//     });
//   });
//   describe('transformData', function () {
//     it('should be a function', function () {
//       expect(transformData).to.be.a('function');
//     });
//     it('should return object with required properties', async function () {
//       const ck = await jwk2cryptoKey(jwk);
//       ck.usages.push('encrypt');
//       console.log(ck);
//       const transformedData = await transformData(testData, ck);
//       console.log(transformedData);
//       expect(transformedData).to.be.a('object');
//       expect(transformedData).to.have.property('jwe');
//       expect(transformedData).to.have.property('data');
//     })
//   });
// });
