'use strict';

/**
 * @param {number[]} arr
 * @param {number} num
 * @return {boolean}
 */
const includes = (arr, num) => {
      let x = false;

    for (let i of arr) {
        if (i === num) {
            x = true;
        };
    };

    return x;
};

// examples
includes([1, 4, 8, 3], 3); // ==> true
includes([1, 4, 8, 3], 5); // ==> false
