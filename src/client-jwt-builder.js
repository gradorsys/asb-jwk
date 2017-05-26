const ClientJWT = require('./client-jwt');

module.exports = (function ClientJwtBuilder() {
  // private
  function newClientJWT() {
    return new ClientJWT();
  }

  // interface returned
  return {
    newClientJWT,
  };
}());
