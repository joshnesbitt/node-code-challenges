const test = require('tape');
const bill = require('./index.solution');

test('it should calculate the total of the bill', assert => {
  const expected = 15.00;
  const actual = bill([
    {
      name: 'Fish',
      price: 12.00
    },
    {
      name: 'Chips',
      price: 3.00
    }
  ]);

  assert.equal(actual, expected, `should calculate the bill at ${expected}`);
  assert.end();
});
