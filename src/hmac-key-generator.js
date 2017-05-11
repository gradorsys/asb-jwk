const jose = require('node-jose');

module.exports = (function HmacKeyGenerator() {
  // private
  async function generateHmacKey() {
    const size = 256;
    const keyStore = await jose.JWK.createKeyStore();
    const key = await keyStore.generate('oct', size, { alg: `HS${size}`, use: 'sig' });
    return key.toJSON(true);
  }

  // interface returned
  return {
    generateHmacKey,
  };
}());
