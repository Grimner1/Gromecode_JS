const listElem = document.querySelector('.list');
const creatButton = document.querySelector('.create-task-btn');
const fieldinput = document.querySelector('.task-input');

const tasks = [
  { text: 'Buy milk', done: true, id: 1 },
  { text: 'Pick up Tom from airport', done: true, id: 2 },
  { text: 'Visit party', done: false, id: 3 },
  { text: 'Visit doctor', done: false, id: 4 },
  { text: 'Buy meat', done: false, id: 5 },
];

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', id);
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
  fieldinput.value = '';
};

renderTasks(tasks);

// - должен создавать новый объект, пушить объкт в массив, рендерить массив

// const addtasks = (textOfInput) => {
//   const newTask = { text: textOfInput, done: false, id: taskId };
//   taskId += 1;
//   tasks.push(newTask);
//   listElem.innerHTML = '';

//   renderTasks(tasks);
// };
// -------------------------------------------

let taskId = 6;

const pressToAddTask = () => {
  if (!fieldinput.value) {
    return;
  }
  const textOfInput = fieldinput.value;
  const newTask = { text: textOfInput, done: false, id: taskId };
  taskId += 1;
  tasks.push(newTask);
  listElem.innerHTML = '';

  renderTasks(tasks);
};

creatButton.addEventListener('click', pressToAddTask);

// -------------------------------------------

const funcDuneCheckbox = (event) => {
  // console.log(event.target.closest('li'));
  const liElement = event.target.closest('li');
  const checkboxElement = event.target;
  // console.log(liElement);
  //   console.log(checkboxElement.dataset.id);
  //   console.log(tasks[checkboxElement.dataset.id].done);
  //   console.log(checkboxElement.checked);

  const getOBj = tasks.find((elem) => elem.id === +checkboxElement.dataset.id);
  getOBj.done = checkboxElement.checked;

  // const findEl = tasks.filter(({ id }) => {
  //   // console.log(id);
  //   // console.log(checkboxElement.dataset.id == id);
  //   if (id == checkboxElement.dataset.id) {
  //     return id;
  //   }
  // });
  // // console.log(findEl[0].done);
  // if (checkboxElement.checked) {
  //   liElement.classList.add('list__item_done');
  //   // console.log(checkboxElement.dataset.id);
  //   findEl[0].done = checkboxElement.checked;
  //   // tasks[checkboxElement.dataset.id].done = true;
  // } else {
  //   liElement.classList.remove('list__item_done');
  //   // console.log(checkboxElement.dataset.id);
  //   findEl[0].done = checkboxElement.checked;
  //   // tasks[checkboxElement.dataset.id].done = false;
  // }
  listElem.innerHTML = '';
  renderTasks(tasks);
};

listElem.addEventListener('click', funcDuneCheckbox);

// ------------------------------------------так и не понял как тут через map -----

// const func = (event) => {
//   const liElement = event.target.closest('li');
//   const checkboxElement = event.target;
//   const x = tasks.map((element) => {
//     console.log(element.id);
//     if (element.id == checkboxElement.dataset.id) {
//       return {
//         ...element,
//         done: checkboxElement.checked,
//       };

//       // if (checkboxElement.checked) {
//       //   // console.log(tasks);
//       //   liElement.classList.add('list__item_done');
//       //   tasks[index].done = true;
//       // } else {
//       //   console.log(tasks);
//       //   liElement.classList.remove('list__item_done');
//       //   tasks[index].done = false;
//       // }
//     }
//     return element;
//   });
//   console.log(x);
//   return x;
// };

// const funcDuneCheckbox = (event) => {
//   func(event);

//   listElem.innerHTML = '';
//   renderTasks(func);
// };

// listElem.addEventListener('change', funcDuneCheckbox);
