const fieldForClick = document.querySelector('.main');
const numberField = document.querySelector('.number');

const putNumber = (event) => {
  const mathSign = event.target.dataset.mathSign;
  const oldNumber = Number(localStorage.getItem('numberValue')) || 0;
  //   console.log(actualNumber);
  //   console.log(mathSign);
  //   console.log(event.target.className);

  if (event.target.className !== 'button') {
    return;
  }
  //   console.log('old', oldNumber);
  //   console.log(event.target);
  //   numberField.textContent
  const newNumber = mathSign === 'minus' ? oldNumber - 1 : oldNumber + 1;
  //   console.log('new', newNumber);

  localStorage.setItem('numberValue', newNumber);

  //   if (eventId === 'minus') {
  //     oldNumber -= 1;
  //   } else {
  //     oldNumber += 1;
  //   }
  //   console.log(localStorage.getItem('numberValue'));
  numberField.textContent = localStorage.getItem('numberValue');
};

fieldForClick.addEventListener('click', putNumber);

const renderPage = () => {
  numberField.textContent = Number(localStorage.getItem('numberValue')) || 0;
};

window.addEventListener('storage', renderPage);

window.addEventListener('DOMContentLoaded', renderPage);
