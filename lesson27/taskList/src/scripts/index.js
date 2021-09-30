import { initTodoListHandlers } from './todoList.js';
import { renderTask } from './renderer.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTask();
  initTodoListHandlers();
});

const onStorageChange = (e) => {
  if (e.key === 'tasksList') {
    renderTask();
  }
};

window.addEventListener('storage', onStorageChange);

// localStorage.clear('taskList');
