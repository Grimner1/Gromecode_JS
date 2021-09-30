const setTolocalStorage = (localStorageKay, localStorageValue) =>
  localStorage.setItem(localStorageKay, JSON.stringify({ localStorageValue }));

const myObj = {
  name: 'Wakha',
  age: 26,
  country: 'Urugvai',
};

const myObj2 = {
  name: 'Tugha',
  age: 76,
  country: 'Turkey',
};

const myObj3 = {
  name: 'Kratos',
  age: 226,
  country: 'Hell',
};

// myFirstLocalStorage;
// secondLS;
// thirdLS;

// setTolocalStorage('thirdLS', myObj3);

function getLocalStorageData() {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (e) {
      newValue = value;
    }
    return { ...acc, [key]: newValue };
  }, {});
}

console.log(getLocalStorageData());
// console.log(Object.entries(localStorage));
// console.log(JSON.parse(localStorage.key(0)));
