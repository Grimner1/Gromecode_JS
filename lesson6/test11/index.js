//put your code here
function checker(arr) {
    
    if (!Array.isArray(arr)) {
        return null;
    };

    let x = arr[0];
    let y = arr[0];

    for (let i of arr) {
        if (i > x) {
            x = i;
        };

        if (i < y) {
            y = i;
        };
    };

    let z = x + y;
    
    return z > 1000;
  };