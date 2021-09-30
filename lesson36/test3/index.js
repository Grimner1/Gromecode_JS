const url = 'https://api.github.com/users/';

// const fetchInfo = (userID) =>
//   fetch(url + userID)
//     .then((response) => {
//       if (!response.ok) {
//         return Promise.reject(new Error(`NOT FIND USER!!!!`));
//       }
//       return response.json();
//     })
//     .then((userInfo) => {
//       if (!userInfo.blog) {
//         return Promise.reject(new Error(`NOT FIND BLOG!!!!`));
//       }
//       return userInfo.blog;
//     });

const fetchInfo = async (userID) => {
  try {
    const userInfo = await fetch(url + userID).then((userObj) => {
      if (!userObj.ok) {
        throw new Error(`NOT FIND USER`);
      }
      return userObj.json();
    });

    if (!userInfo.blog) {
      throw new Error(`NOT FIND BLOG`);
    }
    return userInfo.blog;
  } catch (error) {
    throw new Error(`I FIND ERROR!!:D ${error}`);
  }
  //   if (!response.ok) {
  //     return Promise.reject(new Error(`NOT FIND USER!!!!`));
  //   }

  // constuserInfo) => {
  //       if (!userInfo.blog) {
  //         return Promise.reject(new Error(`NOT FIND BLOG!!!!`));
  //       }
  //       return userInfo.blog;
};

// export
const getUsersBlogs = (usersList) => {
  const promises = usersList.map((userID) => fetchInfo(userID));

  return Promise.all(promises);
};

const list = ['google', 'google', 'facebook', 'grimner1'];
getUsersBlogs(list)
  .then((el) => console.log(el))
  .catch((err) => console.log(err));
