const url = 'https://614c751d59e92d00176ad25f.mockapi.io/tasksList/users';

function getUsersList() {
  return fetch(url).then((list) => list.json());
}

getUsersList().then((el) => console.log(el));

export function getUserById(userId) {
  return fetch(`${url}/${userId}`).then((list) => list.json());
}

// getUserById(1).then((el) => console.log(el));

export function createUser(userData) {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
}

// const user = {
//   email: 'email 111111',
//   firstName: 'firstName 111111',
//   lastName: 'lastName 111111',
//   age: 60,
// };

// createUser(user);

export function deleteUser(userId) {
  fetch(`${url}/${userId}`, {
    method: 'DELETE',
  });
}

// deleteUser('20');

export function updateUser(userId, userData) {
  fetch(`${url}/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
}

// updateUser('2', user);

// examples
getUsersList().then((users) => {
  console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
});

getUserById('2').then((userData) => {
  console.log(userData); // {'id':'2', 'firstName':'Ara' ... }
});

const newUserData = {
  email: 'cool@email.com',
  firstName: 'Iron',
  lastName: 'Man',
  age: 42,
};

createUser(newUserData).then(() => {
  console.log('User created');
});

const updatedUserData = {
  email: 'new@email.com',
  firstName: 'John',
  lastName: 'Doe',
  age: 17,
};

updateUser('1', updatedUserData).then(() => {
  console.log('User updated');
});

deleteUser('2').then(() => {
  console.log('User updated');
});
