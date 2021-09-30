import { getSquaredArray, getOddNumbers } from '.JS/lesson13/test2';

it('все числа массива в квадрат', () => {
  const result = getSquaredArray([2, 4]);

  expect(result).toEqual([4, 16]);
});

it('фильтр массива только на чётные числа', () => {
  const result = getOddNumbers([1, 2, 3, 4]);

  expect(result).toEqual([2, 4]);
});
