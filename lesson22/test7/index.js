const btn = document.querySelectorAll('.btn'); // wrong
// console.log(btn[1]);
// console.log(...btn); // wrong
const body = document.querySelector('body');
// console.log(body);

const handleClick = (event) => {
  console.log(event.target.textContent);
};

btn[0].addEventListener('click', handleClick);
btn[1].addEventListener('click', handleClick);
