const ancynsNum = (num, deley) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(num);
      resolve(num);
    }, deley);
  });

const val1 = ancynsNum(13, 1500);
const val2 = ancynsNum('223', 800);
const val3 = Promise.reject(new Error('WHAT????'));
// const val3 = new Error('WHAT????');
// const val3 = ancynsNum(0, 800);
const val4 = ancynsNum(undefined, 1200);
const val5 = ancynsNum(1024, 1024);

const getSum = (numArray) =>
  numArray.filter((value) => !isNaN(value)).reduce((acc, num) => acc + +num, 0);

const asyncSum = (...valueArray) =>
  Promise.all(valueArray)
    .then((array) => getSum(array))
    .catch((el) => {
      console.log(el);
      Promise.reject(new Error("Can't Calculate\\"));
    });

asyncSum(val1, val2, val3, val4, val5).then((el) => console.log(el));
