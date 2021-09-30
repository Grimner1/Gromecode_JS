const url = 'https://614c751d59e92d00176ad25f.mockapi.io/tasksList/Tasks';

const getItem = () => fetch(url).then((el) => el.json());

getItem().then((el) => console.log(el));
