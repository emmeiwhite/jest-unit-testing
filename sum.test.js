const sum = require('./sum')

test('sum of num1 and num2', () => {
  expect(sum(1, 2)).toBe(3)
})
