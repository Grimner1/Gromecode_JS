import { getMinSquaredNumber } from '.JS/lesson13/test3';

it('должен вернуть квадрат минимального по модулю числа', () => {
  const result = getMinSquaredNumber([-2, 4]);

  expect(result).toEqual([4]);
});
