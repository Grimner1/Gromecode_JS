function manageClasses() {
  // const one = document.querySelector('.one');

  function changes(oldClass, method, newClass) {
    const element = document.querySelector(oldClass);
    element.classList[method](newClass);
    return element;
  }

  changes('.one', 'add', 'selected');
  changes('.two', 'remove', 'selected');
  changes('.three', 'toggle', 'three_done');
  changes('.four', 'add', 'another-class');
}

manageClasses();
