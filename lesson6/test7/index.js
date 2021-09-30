function checkSum(arr) {
    let sum = 0;

    if (!Array.isArray(arr)) {
        return null;
    };

    for (let i of arr) {
        sum +=i;
    };

    if (sum > 100) {
        return true;
    } if (sum <= 100) {
        return false;
    };
  };