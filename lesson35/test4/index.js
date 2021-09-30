const obj = {
  name: 'Tom',
  age: 27,
  sity: 'Locra',
};

const parsObj = JSON.stringify(obj);
const parsObj2 = '{"name":"Tom","age":27,"sity":"Locra"';

function parseUser(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch {
    return null;
  }
}

console.log(parseUser(parsObj2));
