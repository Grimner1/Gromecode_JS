import { withdraw, getAdults, reverseArray } from '.JS/lesson13/test4';

it('проверка на неверный тип данных', () => {
  const result = withdraw(123, [100, 50, 300], 'Mike', 50);

  expect(result).not.toEqual(50);
});

it('проверка на неверное количество аргументов', () => {
  const result = withdraw(['Mike', 'Joli', 'Sam'], [100, 200, 300], 'Mike');

  expect(result).not.toEqual(50);
});

it('должен выдать верный результат', () => {
  const result = withdraw(['Mike', 'Joli', 'Sam'], [100, 200, 300], 'Mike', 50);

  expect(result).toEqual(50);
});

// --------------------------

it('проверка на неверный тип данных', () => {
  const result = getAdults('123');

  expect(result).not.toEqual({ mike: 22 });
});

it('проверка на пустую строку', () => {
  const result = getAdults('');

  expect(result).not.toEqual({ mike: 22 });
});

it('проверка на верный результат', () => {
  const result = getAdults({ Jon: 12, Mike: 22 });

  expect(result).toEqual({ Mike: 22 });
});

// -------------------------------

it('проверка на неверный тип данных', () => {
  const result = reverseArray('qwerty');

  expect(result).toEqual(null);
});

it('проверка на пустой массив', () => {
  const result = reverseArray([]);

  expect(result).toEqual([]);
});

it('проверка на верный результат', () => {
  const result = reverseArray([1, 2, 3]);

  expect(result).toEqual([3, 2, 1]);
});
