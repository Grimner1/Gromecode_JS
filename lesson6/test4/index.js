'use strict';

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swap(numbers) {
    let [a, ...are] = numbers;
    
    return [...are, a];
}

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swapManual(numbers) {
    let num = numbers.slice();
    let a = num.shift();
    let b = [];

    for (let i of num){
        b.push(i);
    };
    b.push(a);
    
    return b;
}

// examples
swap([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
swapManual([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
