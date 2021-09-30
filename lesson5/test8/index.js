//put your code here
function findDivCount(a, b, n) {
    let x = 0;

    for (let i = a; i <=b; i++) {
        if (i % n === 0) {
            x++;
        };
    };
    return x;
};
