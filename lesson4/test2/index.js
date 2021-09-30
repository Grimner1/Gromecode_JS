// put your code here
const m = 3;
const n = 26;
let result = 1;

for (let i = m; i <= n; i++) {
      if (i % 2 !== 0) {
          result *=i;
      };
};

console.log(result);