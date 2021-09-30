const input = document.querySelector('.text-input');
const inputText = input.value; // почему не работает???
const textToConcole = () => {
  //   console.log(inputText); // почему не работает???
  console.log(input.value);
};
input.addEventListener('change', textToConcole);
