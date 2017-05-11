const td = require('testdouble');

function runTestWithMockedObjectFunction(obj, prop, matchers, results, test) {
  const fn = td.function(prop);
  td.when(fn(...matchers)).thenReturn(...results);
  const originalFn = obj[prop];
  const patchedObj = obj;
  patchedObj[prop] = fn;

  test();

  patchedObj[prop] = originalFn;
}

module.exports = {
  runTestWithMockedObjectFunction,
};
