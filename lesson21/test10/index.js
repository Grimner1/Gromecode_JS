function finishForm() {
  const loginForm = document.querySelector('.login-form');
  const passInput = document.querySelector('input[type = text]');
  console.dir(passInput);
  const textInput = document.createElement('input');
  textInput.setAttribute('type', 'text');
  textInput.setAttribute('name', 'login');
  loginForm.prepend(textInput);
  passInput.setAttribute('type', 'password');
}

finishForm();
