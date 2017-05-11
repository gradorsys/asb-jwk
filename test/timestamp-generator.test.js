const TimestampGenerator = require('../dist/timestamp-generator');
const t = require('tap');
const { runTestWithMockedObjectFunction } = require('./helper');

t.test('TimestampGenerator', (t1) => {
  // some static tests
  t1.type(TimestampGenerator, 'object', 'is an object');
  t1.type(TimestampGenerator.generateTimestamp, 'function', 'has a function generateTimestamp');

  t1.test('generateTimestamp', (t2) => {
    // arrange
    const expected = Date.now();

    // act
    runTestWithMockedObjectFunction(Date, 'now', [], [expected], () => {
      const first = TimestampGenerator.generateTimestamp();
      const second = TimestampGenerator.generateTimestamp();

      // assert
      t2.ok(first === expected, 'returns the expected timestamp');
      t2.true(first < second, 'subsequent calls return increasing timestamps');
    });
    t2.end();
  });
  t1.end();
});
