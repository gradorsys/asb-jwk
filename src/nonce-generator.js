const jose = require('node-jose');

module.exports = (function NonceGenerator() {
  // private
  function generateNonce() {
    const randomBytes = jose.util.randomBytes(4);
    return randomBytes.readUInt32BE(0);
  }

  // interface returned
  return {
    generateNonce,
  };
}());
