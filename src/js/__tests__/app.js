import filterNumber from '../app';

test('+86 000 000 0000 -> +860000000000', () => {
  const number = filterNumber('+86 000 000 0000');
  expect(number).toBe('+860000000000');
});

test('8 (927) 000-00-00 -> +79270000000', () => {
  const number = filterNumber('8 (927) 000-00-00');
  expect(number).toBe('+79270000000');
});

test('+7 960 000 00 00 -> +79600000000', () => {
  const number = filterNumber('+7 960 000 00 00');
  expect(number).toBe('+79600000000');
});

test('+7 960 dd -> ошибка', () => {
  expect(() => filterNumber('+7 960 dd')).toThrowError('номер неможет содержать буквы');
});
