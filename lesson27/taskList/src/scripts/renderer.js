import { getItem, setItem } from './storage.js';

// const updateTaskList = () => {
//   localStorage.clear('taskList');

// };

const listElem = document.querySelector('.list');
//
//
//
const createCheckbox = ({ done, id }) => {
  const checkboxElem = document.createElement('input'); // ----???
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.setAttribute('data-id', id);
  checkboxElem.checked = done;
  checkboxElem.classList.add('list__item-checkbox');

  return checkboxElem;
};

const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');
  const checkboxElem = createCheckbox({ done, id }); // ------?????
  if (done) {
    listItemElem.classList.add('list__item_done');
  }
  listItemElem.append(checkboxElem, text);

  return listItemElem;
};

export const renderTask = () => {
  const tasksList = getItem('tasksList') || [];

  listElem.innerHTML = '';
  //   const tasksElems = taskList.sort(compareTask).map(createListItem);
  const tasksElems = tasksList.sort((a, b) => a.done - b.done).map(createListItem);

  listElem.append(...tasksElems);
  // console.log(taskList);
};
