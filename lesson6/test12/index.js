//put your code here
function sortAsc(array) {
    
    if (!Array.isArray(array)) {
        return null;
    };

    let mass1 = array.sort(function(a, b) {
        return a - b;
    });

    return mass1;
  };

    function sortDesc(array) {
    
    if (!Array.isArray(array)) {
        return null;
    };

    let mass1 = array.sort(function(a, b) {
        return b - a;
    });

    return mass1;
  };