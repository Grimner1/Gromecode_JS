'use strict';

/**
 * @param {number} count
 * @param {number} period
 * @return {undefined}
 */
// export
// const pinger = (count, period) => {
//   console.log('Ping');
//   let counter = count;

//   function consoleLoger() {
//     if (counter > 0) {
//       console.log('Ping');
//       counter -= 1;
//     } else {
//       clearInterval(interval);
//     }
//   }

//   const interval = setInterval(consoleLoger, period);
// };

const pinger = (count, period) => {
  let counter = count;
  console.log('Ping');

  const interval = setInterval(() => {
    if (--counter > 0) {
      console.log('ping');
    } else {
      clearInterval(interval);
    }
  }, period);
};

// examples
pinger(5, 100); // makes 5 writes with 100 ms interval
pinger(7, 1500); // makes 7 writes with 1500 ms interval
