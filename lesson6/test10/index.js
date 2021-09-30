//put your code here
function cloneArr(arr) {
    
    if (!Array.isArray(arr)) {
        return null;
    };

    let mas = arr.slice();
    
    return mas;
  };