export function shmoment(date) {
  //   console.log(date);
  let copyDate = new Date(date);
  //   console.log(copyDate);
  const calcDate = {
    dateFramework(value) {
      //   console.log(value);
      switch (value) {
        case 'years':
          return 'FullYear';
        case 'months':
          return 'Month';
        case 'days':
          return 'Date';
        case 'hours':
          return 'Hours';
        case 'minutes':
          return 'Minutes';
        case 'seconds':
          return 'Seconds';
        case 'milliseconds':
          return 'Milliseconds';
        default:
          return null;
      }
    },

    add(values, num) {
      //   console.log(values, num);
      const value = this.dateFramework(values);
      //   console.log(value);
      copyDate = new Date(eval(`new Date(copyDate.set${value}(copyDate.get${value}() + ${num}))`));
      //   console.log(copyDate);
      return this;
    },

    subtract(values, num) {
      const value = this.dateFramework(values);
      copyDate = new Date(eval(`new Date(copyDate.set${value}(copyDate.get${value}() - ${num}))`));
      return this;
    },

    result() {
      return copyDate;
    },
  };
  //   console.log(calcDate);
  return calcDate;
}

// const x = new Date(2000, 10, 10, 10, 10, 10, 10);
// const xx = new Date(x);
// const value = 'Date';
// const sign = '+';
// const num = 8;
// const y = eval(`new Date(xx.set${value}(xx.get${value}() - ${num}))`);
// console.log(x);
// console.log(y);

const date1 = shmoment(new Date(2000, 10, 10, 10, 10, 10, 10))
  .add('years', 8)
  .add('days', 8)
  .subtract('days', 10)
  .add('months', 2)
  .result();
console.log(date1);
