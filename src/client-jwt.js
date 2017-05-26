const jose = require('node-jose');

module.exports = function ClientJWT() {
  const jwt = {};

  function withAccessToken(token) {
    jwt.access_token = token;
    return this;
  }
  function withJWI(nonce) {
    jwt.jwi = nonce;
    return this;
  }
  function withIAT(timestamp) {
    jwt.iat = timestamp;
    return this;
  }

  function withEXP(expiration) {
    jwt.exp = expiration;
    return this;
  }
  function withHmacKey(jwe) {
    jwt.hmac_key = jwe;
    return this;
  }
  async function build(hmacKey) {
    const jws = await jose.JWS
      .createSign({ format: 'compact' }, hmacKey)
      .update(JSON.stringify(jwt), 'utf8')
      .final();
    return jws;
  }

  return {
    withAccessToken,
    withJWI,
    withIAT,
    withEXP,
    withHmacKey,
    build,
  };
};
