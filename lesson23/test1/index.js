// initialization DOM element block

const emailForm = document.querySelector('#email');
const passwordForm = document.querySelector('#password');
const btn = document.querySelector('.submit-button');

const emailErrorText = document.querySelector('.error-text_email');
const passwordErrorText = document.querySelector('.error-text_password');

// console.log([emailForm, passwordForm]);

const isRequired = (value) => (value ? undefined : 'Required');
// const isEmail = (value) => (value.includes('@') ? undefined : 'Shold be an email');
const isEmail = (value) =>
  value ? (value.includes('@') ? undefined : 'Should be an email') : 'Required';

const validatorByField = {
  email: [isEmail],
  password: [isRequired],
};

const valodate = (fieldName, value) => {
  const validators = validatorByField[fieldName];

  return validators
    .map((validstor) => validstor(value))
    .filter((errText) => errText)
    .join(', ');
};

const onEmailChange = (event) => {
  const errorText = valodate('email', event.target.value);
  emailErrorText.textContent = errorText;
};

const onPasswordChange = (event) => {
  const errorText = valodate('password', event.target.value);
  passwordErrorText.textContent = errorText;
};

emailForm.addEventListener('input', onEmailChange);
passwordForm.addEventListener('input', onPasswordChange);

// wrong option:
// const formValueToAlert = () => {
//   const text = `{Email: ${emailForm.value}, Password: ${passwordForm.value}}`;
//   //   console.log(text);
//   alert(text);
// };

// btn.addEventListener('click', formValueToAlert);

// right option:
const loginForm = document.querySelector('.login-form');

const fieldsErrorText = (event) => {
  event.preventDefault();
  const formDate = [...new FormData(loginForm)].reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value,
    }),
    {},
  );

  alert(JSON.stringify(formDate));
};

loginForm.addEventListener('submit', fieldsErrorText);

// const formValue = new FormData(loginForm);
// console.log(new FormData(loginForm).get('email'));

// ===========================

// function for event block

// init event block

// // так можно получить данные формы - ВАРИАНТ 1:
// const formFields = [...new FormData(formElem)];
// // formFields => [["email", "значение поля email"], ["password", "значение поля password"]]

// const formData = formFields.reduce(function (acc, formField) {
//   const prop = formField[0]; // здесь "name" инпута
//   const value = formField[1]; // здесь "value" инпута
//   // если использовать деструктуризацию, то можно предыдущие 2 строки записать короче
//   // const [prop, value] = formField;
//   return {
//     // используем оператор расширения, чтобы в acc добвить свойства все предыдущих итераций
//     ...acc,
//     // используем вычислимое свойство объекта, чтобы добавить в аккумулятор новое свойство
//     [prop]: value,
//   };
// }, {});

// // более простой формат считывания формы - ВАРИАНТ 2:
// // const formData = Object.fromEntries(new FormData(formElem));
