function finishList() {
  const specialLi = document.querySelector('.special');
  const list = document.querySelector('.list');
  function newLi(text) {
    const li = document.createElement('li');
    li.textContent = text;
    // console.dir(li);
    return li;
  }

  list.prepend(newLi(1));
  list.append(newLi(8));
  specialLi.before(newLi(4));
  specialLi.after(newLi(6));
}

finishList();
