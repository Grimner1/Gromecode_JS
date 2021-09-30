// const body = document.querySelector('body');
const button = document.querySelectorAll('.pagination__page');

function handleClick(event) {
  // console.log(event.target.tagName);
  // if (event.target.tagName !== 'BUTTON') {
  //   return;
  // }
  console.log(event.target.dataset.pageNumber);
}

button[0].addEventListener('click', handleClick);
button[1].addEventListener('click', handleClick);
button[2].addEventListener('click', handleClick);

// console.log(button);
