//  - по нажатию .submit-button - отправка данных формы на сервер:
//      - собрать данные в объект из: id: email, name, password;
//          или попробовать собрать с массива классов: .form-input
//      - объект отправить на сервер;
//      - объект вывести в алерт;
//      - очистить поля форы;
//  - Если произошло ошибка при создании пользователя - вывести
//       'Failed to create user' в .error-text;
//          - если было изменение в одном из полей - ошибку убрать;

const loginForm = document.querySelector('.login-form');
const inputArray = document.querySelectorAll('.form-input');
const submitButton = document.querySelector('.submit-button');
const emailField = document.querySelector('#email');
const nameField = document.querySelector('#name');
const passField = document.querySelector('#password');
const errorField = document.querySelector('.error-text');

const url = 'https://614c751d59e92d00176ad25f.mockapi.io/tasksList/user';

const setInfo = (userInfo) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userInfo),
  });

const clearinputFields = () => {
  emailField.value = ''; // <=== тут очистка полей после ввода
  nameField.value = '';
  passField.value = '';
};

let xxx = null;

const onButtonClick = (event) => {
  // ==== тут я отменяю дефолтное поведение сабмита - правильно?
  event.preventDefault();

  // ==== тут проверка на пустые строки
  if (!(emailField.value && nameField.value && passField.value)) {
    errorField.innerHTML = 'Failed to create user';
    return;
  }

  // === тут проверка на наличие @ в эмейле
  if (!emailField.value.includes('@')) {
    errorField.textContent = 'Failed to create user';
    return;
  }

  // === тут я собираю инфо с полей в объект
  const userInfo = {
    email: emailField.value,
    name: nameField.value,
    password: passField.value,
  };

  // clearinputFields();

  setInfo(userInfo)
    .then((data) => console.log(data.json()))
    // .then((data) => {
    //   alert(JSON.stringify(data));
    //   loginForm.reset();
    // })
    .catch(() => (errorField.textContent = 'Failed to create user')); // <=== тут я принимаю ошибки от сервера
};

submitButton.addEventListener('click', onButtonClick);

// === тут я снимаю\задаю дизейбл кнопке в зависимости от валидности полей
const checkValidForm = () => {
  if (loginForm.reportValidity()) {
    submitButton.removeAttribute('disabled', 'disabled');
  } else {
    submitButton.setAttribute('disabled', 'disabled');
  }
};

loginForm.addEventListener('input', checkValidForm);

// === тут я очищаю после с ошибкой если были сделаны любые изменения с инпутами
const cleanError = () => {
  errorField.innerHTML = '';
};

loginForm.addEventListener('input', cleanError);
