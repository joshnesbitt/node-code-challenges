const test = require('tape');
const square = require('./index');

const draw = (assert, size, expected) => {
  const actual = square(size);
  assert.equal(actual, expected, `should create a square ${size}x${size}`);
  assert.end();
}

test('it should draw a square of 3x3 dimensions', assert => {
  draw(assert, 3, `
---
- -
---
`)
});

test('it should draw a square of 10x10 dimensions', assert => {
  draw(assert, 10, `
----------
-        -
-        -
-        -
-        -
-        -
-        -
-        -
-        -
----------
`)
});
