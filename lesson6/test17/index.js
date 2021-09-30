//put your code here
function uniqueCount(array) {

    if (!Array.isArray) {
        return null;
    };

    const uniqueMass = [];
    let uniqueNum = 0;

    for (let i of array) {
        let z = false;

        for (let y of uniqueMass) {
            if (i === y) {
                z = true;
            };
        };

        if (z === false) {
            uniqueMass.push(i);
            uniqueNum++;
        };
    };

    return uniqueNum;
};