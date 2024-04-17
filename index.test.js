const { validateEmail } = require('./index');

test('validateEmail should return true for a valid email', () => {
  const email = 'reygian2000@gmail.com';
  const result = validateEmail(email);
  expect(result).toBe(true);
});

test('validateEmail should return false for an invalid email', () => {
  const email = '@gmail.com';
  const result = validateEmail(email);
  expect(result).toBe(false);
});
