module.exports = function myLib() { // Jose, JoseJWE }) {
  // function jwk2cryptoKey(jwk) {
  //   const cryptoKey = Jose.Utils.importRsaPublicKey(jwk, 'RSA-OAEP');
  //   return cryptoKey;
  // }

  // function encrypt(data, cryptoKey) {
  //   const cryptographer = new Jose.WebCryptographer();
  //   const encrypter = new JoseJWE.Encrypter(cryptographer, cryptoKey);
  //   return encrypter.encrypt(data);
  // }

  // async function transformData(data, cryptoKey) {
  //   const jwe = await encrypt(data, cryptoKey);
  //   return { jwe, data };
  // }

  // export const axiosProxy = axios.create(Object.assign({}, {
  //   headers: {'Content-Type': 'application/json;charset=UTF-8'},
  //   transformRequest: [
  //     async function (data) {
  //       const transformedData = await transformData(data, jwk);
  //       return JSON.stringify(transformedData);
  //     }
  //   ]
  // });

  // function greeter(name) {
  //   return `Hallo ${name}`;
  // }

  return {
    // jwk2cryptoKey,
    // transformData,
    // greeter,
    adder(x, y) { return x + y; },
  };
};

// const WebCrypto = require('node-webcrypto-ossl');

// const webcrypto = new WebCrypto();
// global.crypto = webcrypto;

// import axios from 'axios';
// const Jose = require('jose-jwe-jws');
// const { Jose, JoseJWE } = require('jose-jwe-jws');
// import { Jose, JoseJWE } from 'jose-jwe-jws';
// import SecretCredentialEncryptor from './secretCredentialEncrypter';
