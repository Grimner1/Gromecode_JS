let arr = [-11, -2, 3, -44, 55, 116];

export function getMinSquaredNumber(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return null;
  }

  const result = array.map((el) => Math.abs(el));
  let minNumber = result[0];
  result.forEach((el) => {
    if (el < minNumber) {
      minNumber = el;
    }
  });
  return minNumber * minNumber;
}

console.log(getMinSquaredNumber(arr));
