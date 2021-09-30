// const add = (num) => num + 3;
// const mult = (num) => num * 2;
// const div = (num) => num / 4;

export const compose =
  (...funcs) =>
  (value) => {
    return funcs.reduce((acc, func) => func(acc), value);
  };

// const result = compose(add, mult, div);

// console.log(result(3));
