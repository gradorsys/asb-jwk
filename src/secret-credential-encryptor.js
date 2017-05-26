const jose = require('node-jose');

function str2ab(str) {
  const buf = new ArrayBuffer(str.length * 2);
  const bufView = new Uint16Array(buf);
  str
    .split('')
    .map(s => s.charCodeAt(0))
    .reduce((prev, curr, index) => { const b = prev; b[index] = curr; return b; }, bufView);
  return buf;
}

module.exports = (function SecretCredentialEncryptor() {
  // private
  async function encrypt(secret, serverPublicKey) {
    const abuffer = str2ab(secret);
    const buffer = jose.util.asBuffer(abuffer);
    const jwe = await jose.JWE
      .createEncrypt({ format: 'compact' }, serverPublicKey)
      .update(buffer)
      .final();
    return jwe;
  }

  // interface returned
  return {
    encrypt,
  };
}());
