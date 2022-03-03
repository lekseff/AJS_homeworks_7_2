import ErrorRepository from '../app';

test.each([
  [100, 'Ошибка 100'],
  [110, 'Ошибка 110'],
  [120, 'Ошибка 120'],
  [130, 'Ошибка 130'],
  [300, 'Unknown error'],
])('Получение описания ошибки', (received, expected) => {
  const errors = new ErrorRepository();
  expect(errors.translate(received)).toBe(expected);
});
