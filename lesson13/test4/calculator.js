let aa = '1+7';

export const calc = (expression) => {
  if (typeof expression !== 'string') {
    return null;
  }

  const [a, operation, b] = expression.split(' ');
  let result;
  console.log(a, operation, b);
  switch (operation) {
    case '+':
      result = +a + +b;
      break;
    case '-':
      result = +a - +b;
      break;
    case '*':
      result = +a * +b;
      break;
    case '/':
      result = +a / +b;
      break;
  }

  return `${expression} = ${result}`;
};

console.log(calc(aa));
