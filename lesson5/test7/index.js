function sum(from, to) {
    let x = 0;

    for (let i = from; i <= to; i++) {
        x +=i;
    };
    return x;
};

function compareSums(a, b, c, d) {
    return sum(a, b) > sum(c, d);
};