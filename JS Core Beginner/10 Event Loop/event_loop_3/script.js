// Сделайте функцию, которая будет
// генерировать случайные числа от 1 до 10.
// Сделайте так, чтобы сгенерированное число
// было задержкой функции setTimeout в
// секундах. Оберните все это в промис. Пусть
// промис выполнится успешно, если
// сгенерировано число от 1 до 5, и с ошибкой -
// если от 6 до 10.

function generateRandomDelay() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    setTimeout(() => {
      if (randomNumber <= 5) {
        resolve(randomNumber);
      } else {
        reject(`Error: Generated number ${randomNumber} is greater than 5.`);
      }
    }, randomNumber * 1000); 
  });
}

generateRandomDelay()
  .then(number => console.log(`Resolved: ${number}`))
  .catch(error => console.log(`Rejected: ${error}`));