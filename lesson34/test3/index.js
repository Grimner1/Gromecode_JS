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

// const clearinputFields = () => {
//   emailField.value = '';
//   nameField.value = '';
//   passField.value = '';
// };

const onButtonClick = (event) => {
  event.preventDefault();

  const userInfo = {
    email: emailField.value,
    name: nameField.value,
    password: passField.value,
  };

  setInfo(userInfo)
    .then((data) => data.json())
    .then((data) => {
      alert(JSON.stringify(data));
      loginForm.reset();
    })
    .catch(() => {
      errorField.textContent = 'Failed to create user';
    });
};

const checkValidForm = () => {
  if (loginForm.reportValidity()) {
    submitButton.removeAttribute('disabled', 'disabled');
  } else {
    submitButton.setAttribute('disabled', 'disabled');
  }
};

const cleanError = () => {
  errorField.innerHTML = '';
};

submitButton.addEventListener('click', onButtonClick);
loginForm.addEventListener('input', checkValidForm);
loginForm.addEventListener('input', cleanError);
