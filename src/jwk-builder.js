const jose = require('node-jose');

module.exports = (function JwkBuilder() {
  // private
  function build(publicKey) {
    return jose.JWK.asKey(publicKey, 'pem');
  }

  // interface returned
  return {
    build,
  };
}());
