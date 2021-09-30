const url = 'https://api.github.com/users/';

// export
const fetchUser = async (userName) => {
  try {
    const fetchUsers = await fetch(`${url}${userName}`);
    if (!fetchUsers.ok) {
      return null;
    }
    return fetchUsers.json();
  } catch (err) {
    // return Promise.reject(new Error(`my err: ${err}`));
    throw new Error(`my err: ${err}`);
  }
};

fetchUser('google')
  .then((el) => console.log(el))
  .catch((err) => console.log(err));
