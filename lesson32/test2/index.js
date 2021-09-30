const randomaizer = (from, to) => Math.floor(from + Math.random() * to);
console.log(randomaizer(1000, 3000));

const randomUsersValue = (url) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        userData: {
          name: 'Tom',
          age: 17,
        },
        source: url,
      });
    }, randomaizer(1000, 3000));
  });

const linklArray = ['https://server.com/us/', 'https://server.com/eu/', 'https://server.com/au/'];

const getUserASAP = (userID) => {
  const linkId = linklArray.map((el) => `${el}${userID}`);
  const request = linkId.map((el) => randomUsersValue(el));
  return Promise.race(request);
};

getUserASAP('user-12345').then((result) => console.log(result));
