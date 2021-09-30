import { calc } from '.JS/lesson13/test4';

it('проверка работы калькулятора', () => {
  const result = getSquaredArray('2+11');

  expect(result).toEqual('2+11 = 13');
});
