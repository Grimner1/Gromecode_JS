const requestUserData = (userId) => {
  const p = new Promise((rulfilled, rejected) => {
    if (userId === 'broken') {
      setTimeout(() => {
        rejected(new Error('User not found'));
      }, 500);
    } else {
      setTimeout(() => {
        rulfilled({ name: 'John', age: 17, userId, email: `${userId}@example.com` });
      }, 1000);
    }
  });
  return p;
};

// ==================

requestUserData('userid').then((obj) => console.log(obj));
requestUserData('broken').catch((error) => console.log(error));
