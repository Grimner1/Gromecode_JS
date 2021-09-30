const btn = document.querySelector('.single-use-btn');

function oneMorNot() {
  console.log('clicked');
  btn.removeEventListener('click', oneMorNot);
}

btn.addEventListener('click', oneMorNot);
