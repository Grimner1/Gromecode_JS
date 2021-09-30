const successPromise = new Promise((resolve) => {
  resolve(32);
});

/*
 * исправь цепочку промисов, чтобы в последнем обработчике вывелось нужное число
 */

successPromise
  .then((number) => {
    // console.log('one: ', number);
    const halfNumber = number / 2;
    // console.log('two: ', halfNumber);
    return halfNumber;
  })
  .then((number) => {
    // console.log('tree: ', number);
    /* fix this handler */
    const squaredNumber = number * number;
    // console.log('four: ', squaredNumber);
    return squaredNumber;
  })
  .then((result) => {
    // console.log('five: ', result); // 256
    console.log(result); // 256
  });

/*
 * исправь цепочку промисов, чтобы в последнем обработчике вывелось нужное число
 */
successPromise
  .then((number) => {
    // console.log('six: ', number);
    /* fix this handler */
    const onTen = number * 10;
    return onTen;
  })
  .then((result) => {
    // console.log('seven: ', result); // 320
    console.log(result); // 320
  });

console.log(
  '!!! Обрати внимание, что этот текст вывелся самым первым. Ведь это синхронный код, а промисы - асинхронны !!!',
);
