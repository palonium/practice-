// Напишите функцию, которая использует блок
// try-catch для перехвата и обработки ошибки
// TypeError при доступе к свойству
// неопределенного объекта

function accessProperty(obj, propertyName) {
    try {
      return obj[propertyName];
    } catch (error) {
      if (error instanceof TypeError) {
        console.log('ошибка');
        console.log(obj);
        console.log(propertyName);
        } else {
        throw error;
      }
    }
}

const obj = { name: 'Polina', age: 20 };
console.log(accessProperty(obj, 'name')); 
console.log(accessProperty(obj, 'address')); 

const undefinedObj = undefined;
console.log(accessProperty(undefinedObj, 'name')); 

const nullObj = null;
console.log(accessProperty(nullObj, 'name')); 
