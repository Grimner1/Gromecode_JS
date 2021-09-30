'use strict';

export const withdraw = (clients, balances, client, amount) =>
  balances[clients.indexOf(client)] < amount ? -1 : (balances[clients.indexOf(client)] -= amount);

// --------------------------------------------------

export const getAdults = (obj) => {
  const obj2 = {};

  for (let i in obj) {
    if (obj[i] >= 18) {
      obj2[i] = obj[i];
    }
  }

  return obj2;
};

// --------------------------------------------------

export const reverseArray = (arr) => (!Array.isArray(arr) ? null : arr.slice().reverse());
