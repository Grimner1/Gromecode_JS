const userAvatar = document.querySelector('.user__avatar');
const userName = document.querySelector('.user__name');
const userLocation = document.querySelector('.user__location');
const repoList = document.querySelector('.repo-list');

userAvatar.src = 'https://avatars3.githubusercontent.com/u10001';

export const renderList = (objList) => {
  repoList.textContent = '';
  const listToRender = objList.map(({ name }) => {
    const listElement = document.createElement('li');
    listElement.classList.add('repo-list__item');
    listElement.textContent = name;
    return listElement;
  });
  repoList.append(...listToRender);
};

export const renderUserInfo = (userData) => {
  const { avatar_url, name, location, repos_url } = userData;
  userAvatar.src = avatar_url;
  userName.textContent = name;
  userLocation.textContent = `from ${location}`;
  return repos_url;
};
