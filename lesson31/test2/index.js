// export
const asyncCalculator = (numbr) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Initial value: ${numbr}`);
      resolve(numbr);
    }, 500);
  })
    .then(
      (num) =>
        new Promise((resolve) => {
          setTimeout(() => {
            const res = num * num;
            console.log(`Squared value: ${res}`);
            resolve(res);
          }, 500);
        }),
    )
    .then((num) => {
      const res = num * 2;
      console.log(`Doubled value: ${res}`);
      return res;
    });

asyncCalculator(5).then((el) => console.log(el));

// export
// const asyncCalculator = (numbr) =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`Initial value: ${numbr}`);
//       resolve(numbr);
//     }, 500);
//   })
//     .then(
//       (num) =>
//         new Promise((resolve) => {
//           setTimeout(() => {
//             const res = num * num;
//             console.log(`Squared value: ${res}`);
//             resolve(res);
//           }, 500);
//         }),
//     )
//     .then(
//       (num) =>
//         new Promise((resolve) => {
//           setTimeout(() => {
//             const res = num * 2;
//             console.log(`Doubled value: ${res}`);
//             resolve(res);
//           }, 500);
//         }),
//     );

// asyncCalculator(5).then((el) => console.log(el));
// asyncCalculator(5);
