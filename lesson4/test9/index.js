// put your code here
const n = 100;
let sum = 0;

for (let i = 0; i <= n; i++) {
    sum +=i;
};

let sum2 = Math.trunc(sum / 1234);
let sum3 = sum % 1234;

console.log(sum2 > sum3);