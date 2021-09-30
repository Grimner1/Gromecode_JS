// 1. функция-объект с методами;
//     - функция содержит память: массив который  содержит объекты;
// 2. функция принимает string в контексте своего (указанного через точку) метода (тип сообщения);
// 3. Функция добавляет в массив объект:
//     - каждый объект состоит из: [{message: ..., dataTime: ..., type: ...}];
// 4. функция возвращает результат указанного (через точку) метода:
// 5. Функция содержит методы для генерации объекта в массив: log(), warn(), error(); Аргументы данных методов - сроки;
//     - при актвации одного из методов, в массив добавляется объект, в котором:
//            {
//            message: 'аргумент активированого метода';
//            dataTime: 'время активации метода'; - сделать через объкт Date();
//            type: 'имя активированого метода';
//            };
// 6. функция имеет метод вывода сообщений: getRecords(); инпут данного метода - string (имя одного из методов: log, warn, error);
//     - при выводе весь массив должен быть отсортирован по ключу dataTime: самое новые в начале;
//          -
//     - если аргумент не передан: выводит весь массив объектов;
//     - Если передано название одного из методов - фильтрует массив и возвращает объекты в которых значение ключа type: 'указанный метод';
//     - Если память-массив пуст - метод тоже должен вывести пустой массив;
// 7. Функция должна экспортироваться из файла index.js с именем 'createLogger';

// Вопросы:
// ??? - каков должен быть результат, если передан не верный аргумент?
// ??? - каков должен быть результат, если указан не верный метод?
// ??? - откуда брать значение строк? Оно уже указано в тестах или задавать самому?
//
// input createLogger():
// output createLogger():
//
// input message, dataTime, type: string;
// output message, dataTime, type: undefined;
//
// input getRecords: ничего;
// output getRecords: Array[{Object}, {Object}, ...{Object}];

// =============================================Start Logger-Project

// export
function createLogger() {
  const logs = [];

  function log(message) {
    const newlog = { ['message']: message, ['dateTime']: new Date(), ['type']: 'log' };
    logs.push(newlog);
  }

  function warn(message) {
    const newlog = { ['message']: message, ['dateTime']: new Date(), ['type']: 'warn' };
    logs.push(newlog);
  }

  function error(message) {
    const newlog = { ['message']: message, ['dateTime']: new Date(), ['type']: 'error' };
    logs.push(newlog);
  }

  function getRecords(argument) {
    logs.sort((el1, el2) => el2.dateTime - el1.dateTime);
    if (argument) {
      return logs.filter((el) => el.type === argument);
    } else {
      return logs;
    }
  }

  return { log, warn, error, getRecords };
}

// ====== Data test:

// Объявляем логгеры
const logger = createLogger();
const logger2 = createLogger();

// заполняем массив
logger.log('log 1');
logger.error('error 1');
logger.warn('warn 1');
logger.log('log 2');
logger.error('error 2');
logger.warn('warn 2');
logger.log('log 3');
logger.error('error 3');
logger.warn('warn 3');

// Проверяем вывод
console.log(logger.getRecords('log')); // выводит только log
console.log(logger.getRecords('error')); // выводит только error
console.log(logger.getRecords('warn')); // выводит только warn
console.log(logger.getRecords()); // выводить весь массив
console.log(logger2.getRecords()); // проверка на независимость логгеров

// Тест на ошибки
let test;
console.log('======тетс на ошибки======');
logger.log(111);
logger.error(test);
logger.warn(1 + 2);
logger.warn(NaN);
logger.warn(undefined);
logger.warn(Infinity);
console.log(logger.getRecords(123));
console.log(logger.getRecords(test));
console.log(logger.getRecords(NaN));
console.log(logger.getRecords(undefined));
console.log(logger.getRecords(Infinity));
console.log(logger.getRecords()); // выводить весь массив
