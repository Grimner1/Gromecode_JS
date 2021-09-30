// put your code here
function reverseArray(arr) {
    let mas = [];

    if (!Array.isArray(arr)) {
        return null;
    };

    for (let i = arr.length - 1; i >= 0; i--) {
        mas.push(arr[i]);
    };

    return mas;
  };