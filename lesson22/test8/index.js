const input = document.querySelector('.text-input');

function foo(event) {
  console.log(event.target.value);
}

input.addEventListener('change', foo);
