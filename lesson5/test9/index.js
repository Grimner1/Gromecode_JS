/**
 * @param {number} num
 * @return {undefined}
 */
 function getPrimes(num) {
    for (let i = 2; i <= num; i++) {
      let q = true;
      if (num === 2){
          return num;
      } else {
          for (let z = 2; z < i; z++) {
              if (i % z === 0){
                  q = false;
              };
          };
          if (q === true) {
              console.log(i);
          };
      };
  };
}
