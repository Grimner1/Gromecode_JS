'use strict';

/**
 * @param {number[]} arr
 * @return {number}
 */
function getSum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  };

  let x = 0;

  for (let i of arr) {
    x +=i;
  };

  return x;
}

// examples
getSum([1, 10, -10, 4]); // ==> 5
getSum([1]); // ==> 1
getSum([-8, 8]); // ==> 0
getSum(10, 12, 14); // ==> null
