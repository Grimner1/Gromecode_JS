// function squaredNumbers() {
//   const liElement = document.querySelectorAll('.number');
//   // console.log(liElement);
//   const arrayClass = [...document.querySelectorAll('.number')];
//   // console.log(arrayClass);
//   // console.log(arrayClass[1]);
//   //   console.log(arrayClass[1].dataset);
//   //   console.log(arrayClass[1].dataset);
//   //   const xx = document.querySelector('li[data-number="5"]');
//   //   console.log(xx);

//   arrayClass.map((element) => {
//     const getDataAtribute = element.dataset;
//     const objectToString = Object.entries(getDataAtribute);
//     // console.log(element);
//     // console.log(getDataAtribute);
//     // console.log(objectToString);
//     // console.log(objectToString[0][1]);
//     const toSquared = objectToString[0][1] * objectToString[0][1];
//     // console.log(toSquared);
//     const liId = objectToString[0][1];
//     // console.log(liId);
//     const li = document.querySelector(`li[data-number="${liId}"]`);
//     // console.log(li);
//     li.setAttribute('data-squared-number', toSquared);
//     // console.log(li);
//   });
// }

// squaredNumbers();

// ====================================================================

function squaredNumbers() {
  return [...document.querySelectorAll('.number')].map((element) => {
    const objectToString = Object.entries(element.dataset);
    const toSquared = objectToString[0][1] * objectToString[0][1];
    const li = document.querySelector(`li[data-number="${objectToString[0][1]}"]`);
    li.setAttribute('data-squared-number', toSquared);
  });
}

squaredNumbers();
