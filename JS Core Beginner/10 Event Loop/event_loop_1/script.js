// Напишите функцию, которая принимает
// callback функцию и вызывает ее после
// задержки в 2 секунды.

function callbackFunction(callback) {
    setTimeout(callback, 2000);
  }
  
  // Пример использования
  function callbackNew() {
    console.log('Функция была вызвана после задержки в 2 секунды');
  }
  
callbackFunction(callbackNew);