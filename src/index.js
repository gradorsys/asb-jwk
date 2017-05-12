import HmacKeyGenerator from './hmac-key-generator';
import JwkBuilder from './jwk-builder';
import NonceGenerator from './nonce-generator';
import SecretCredentialEncryptor from './secret-credential-encryptor';
import TimestampGenerator from './timestamp-generator';


module.exports = (function myLib() {
  return {
    HmacKeyGenerator,
    JwkBuilder,
    NonceGenerator,
    SecretCredentialEncryptor,
    TimestampGenerator,
  };
}());
