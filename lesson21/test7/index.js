// const clearList = () => (document.querySelector('.categories').innerHTML = '');

// clearList();
function clearList() {
  const elementToClear = document.querySelector('.categories');
  console.dir(elementToClear);
  elementToClear.innerHTML = '';
}

clearList();
