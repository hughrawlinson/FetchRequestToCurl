import fetchRequestToCurl from '../lib/index.js';
import test from 'ava';

// https://developer.mozilla.org/en-US/docs/Web/API/Request

test('throws an error if required url is not passed', t => {
  t.throws(() => {
  })
});
