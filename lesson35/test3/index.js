const userAvatar = document.querySelector('.user__avatar');
const userName = document.querySelector('.user__name');
const userLocation = document.querySelector('.user__location');
const spinner = document.querySelector('.spinner');
const repoList = document.querySelector('.repo-list');
const inputForm = document.querySelector('.name-form__input');
const button = document.querySelector('.name-form__btn');

// по нажатию кнопки, считать текст с инпута и отправить запрос на сервер;
//      - url: https://api.github.com/users/
//      - запрос через фетч:
//              - в полученном промисе нужны следующие поля:
//                      - avatar_url, name, location, repos_url;
//              - полученные данные рендерим на страницу;
//              - поcле полученного промисе сразу делаем запрос на repos_url
//              - в ответ получаем список. Выделяем после 'name' которые рендерим
//                  в  repo-list; Каждый элемент li имеет класс '.repo-list__item'
//              - в случае любой ошибки нужно словить её в catch и вывести alert:
//                  'Failed to load data';
//      - все файлы разбить на модули
//      - спиннер запускается сразу после нажатия на кнопку и выключается
//                  после всех событий в  finaly;

const url = 'https://api.github.com/users/';

userAvatar.src = 'https://avatars3.githubusercontent.com/u10001';

const showShinner = () => {
  spinner.classList.remove('spinner_hidden');
};

const hideSpinner = () => {
  spinner.classList.add('spinner_hidden');
};

const renderList = (objList) => {
  const listToRender = objList.map(({ name }) => {
    const listElement = document.createElement('li');
    listElement.classList.add('repo-list__item');
    listElement.textContent = name;
    return listElement;
  });
  repoList.append(...listToRender);
};

const getUserRepo = (userUrl) => {
  fetch(userUrl)
    .then((promis) => promis.json())
    .then((userInfo) => JSON.stringify(userInfo))
    .then((userInfoInString) => JSON.parse(userInfoInString))
    .then((userInfoInObject) => renderList(userInfoInObject))
    .catch(() => alert('Failed to load data'))
    .finally(() => {
      hideSpinner();
    });
};

const render = (userData) => {
  const { avatar_url, name, location, repos_url } = userData;
  userAvatar.src = avatar_url;
  userName.textContent = name;
  userLocation.textContent = `from ${location}`;
  return repos_url;
};

const getUserInfo = () => {
  showShinner();
  repoList.textContent = '';
  const userUrl = inputForm.value;
  return fetch(url + userUrl)
    .then((response) => response.json())
    .then((userData) => render(userData))
    .then((repoUrl) => getUserRepo(repoUrl))
    .catch(() => alert('Failed to load data'))
    .finally(() => {
      hideSpinner();
    });
};

button.addEventListener('click', getUserInfo);
