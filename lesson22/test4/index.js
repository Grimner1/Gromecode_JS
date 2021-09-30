const check = document.querySelector('.task-status');
const func = () => {
  console.log(check.checked);
};

check.addEventListener('change', func);
