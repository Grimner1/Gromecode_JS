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

import { getUserInfo } from './geiInfo.js';

const button = document.querySelector('.name-form__btn');

button.addEventListener('click', getUserInfo);
