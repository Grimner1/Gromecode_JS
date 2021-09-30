const ancynsNum = (num, deley) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(num);
      resolve(num);
    }, deley);
  });

const val1 = ancynsNum(13, 1500);
const val2 = ancynsNum('223', 800);
const val3 = new Error('WHAT????');
// const val3 = ancynsNum(0, 800);
const val4 = ancynsNum(undefined, 1200);
const val5 = ancynsNum(1024, 1024);

const getSum = (numArray) =>
  numArray.filter((value) => !isNaN(value)).reduce((acc, num) => acc + +num, 0);

const asyncSum = (...asyncNumbers) => {
  return Promise.all(asyncNumbers)
    .then((num) => getSum(num))
    .catch((error) => Promise.reject(new Error(error)));
};

asyncSum(val1, val2, val3, val4, val5).then((result) => console.log(result));
