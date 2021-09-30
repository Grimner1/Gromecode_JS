export function calc(resultber) {
  let result = resultber;
  console.log(result);

  const calculator = {
    add(value) {
      result += value;
      console.log(result);
      return this;
    },

    subtract(value) {
      result -= value;
      console.log(result);
      return this;
    },

    mult(value) {
      result *= value;
      console.log(result);
      return this;
    },

    div(value) {
      result /= value;
      console.log(result);
      return this;
    },

    result() {
      return result;
    },
  };

  return calculator;
}

// console.log(calc(3).add(2).mult(4).div(10).subtract(5).result());
