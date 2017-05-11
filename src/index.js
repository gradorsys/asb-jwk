import HmacKeyGenerator from './hmac-key-generator';
import NonceGenerator from './nonce-generator';
import SecretCredentialEncryptor from './secret-credential-encryptor';
import TimestampGenerator from './timestamp-generator';

module.exports = (function myLib() {
  return {
    HmacKeyGenerator,
    NonceGenerator,
    SecretCredentialEncryptor,
    TimestampGenerator,
  };
}());
