module.exports = (function TimestampGenerator() {
  // private
  let previousTimestamp = 0;

  function generateTimestamp() {
    const timestamp = Math.max(Date.now(), previousTimestamp + 1);
    previousTimestamp = timestamp;
    return timestamp;
  }

  // interface returned
  return {
    generateTimestamp,
  };
}());
