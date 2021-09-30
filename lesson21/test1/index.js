'use strict';

// export
const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

// input: array;
// output: undefined;

// 1. находим DOM элемент ul .list через document.querySelector;
// 2. через map итерируем массив: ({text, flag}), в методе делаем следующее:
//      - создаём объект li;
//      - назначаем li класс .list__item;
//      - добавляем в li аргумент text;
//      - if (flag === true) ==> li += .list__item_done
//      - создаём объект input;
//      - задаём input тип checkbox;
//      - if (flag === true) ==> checkbox = checked;
// 3. добавляем ul .list через apped(...результат map)
//

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
// export
const renderTasks = (tasksList) => {
  const taskItem = document.querySelector('.list');
  //   console.dir(tasksList);
  const newTask = tasksList.map(({ text, done }) => {
    // console.log(done);
    const liLine = document.createElement('li');
    liLine.classList.add('list__item');
    if (done) {
      liLine.classList.add('list__item_done');
    }
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.classList.add('list__item-checkbox');
    checkBox.checked = done;
    liLine.append(checkBox, text);
    // console.log(liLine);

    return liLine;
  });

  taskItem.append(...newTask);
};

console.log(renderTasks(tasks));
