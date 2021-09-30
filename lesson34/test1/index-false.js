//  - в авто режиме добавить 5 задач учитывая чекет
//  - доделать сортировку почле чекет
//  - добавить\удалить класс .list__item_done при чекет +++

const listElem = document.querySelector('.list');
const creatButton = document.querySelector('.create-task-btn');
const fieldinput = document.querySelector('.task-input');

const tasks = [];

let taskId = 1;

const renderTask = (text) => {
  if (!text) {
    return;
  } else {
    const addTask = (text) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', taskId);
      taskId += 1;
      checkbox.classList.add('list__item-checkbox');
      listItemElem.append(checkbox, text);
      return listItemElem;
    };

    listElem.append(addTask(text));
    tasks.push({ ['text']: text, done: false });
    fieldinput.value = '';
  }
};
// ---------------------------------------------

const textOfInput = fieldinput.value;

const pressToAddTask = () => {
  renderTask(fieldinput.value);
};

creatButton.addEventListener('mouseup', pressToAddTask);

// ---------------------------------------------

const funcDuneCheckbox = (event) => {
  // console.log(event.target.closest('li'));
  const liElement = event.target.closest('li');
  const checkboxElement = event.target;
  console.log(liElement);
  console.log(checkboxElement.checked);
  if (checkboxElement.checked) {
    liElement.classList.add('list__item_done');
    console.log(checkboxElement.dataset);
    // tasks;
  } else {
    liElement.classList.remove('list__item_done');
  }
  // tasks.sort((a, b) => a.done - b.done);
};

listElem.addEventListener('change', funcDuneCheckbox);
