'use strict';

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function getArrayBounds(arr) {
      let x = [];

    if (!Array.isArray(arr)) {
        return null;
    };

    x.push(arr.length);
    x.push(arr[0]);
    x.push(arr[arr.length - 1]);

    return x;
}

// examples
getArrayBounds([1, 10, 9, 11]); // ==> [4, 1, 11]
getArrayBounds(10, 12, 14); // ==> null
getArrayBounds([1]); // ==> [1, 1, 1]
