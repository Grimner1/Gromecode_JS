// ============================ code with test-data

// function getSection(num) {
//   const spanElement = document.querySelector(`span[data-number="${num}"]`);
// //   console.log(spanElement);
//   const parentElement = spanElement.closest('div');
// //   console.log(parentElement);
//   return parentElement.dataset.section;
// }

// console.log(getSection(2));

// ============================== clear code

const getSection = (num) =>
  document.querySelector(`span[data-number="${num}"]`).closest('div').dataset.section;

// console.log(getSection(3));
