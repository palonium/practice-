// Напишите функцию, выполняющую серию
// асинхронных операций последовательно,
// используя Promises

const delayAndLogOne = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(1);
      resolve();
    }, 1000);
  });
};

const delayAndLogTwo = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(2);
      resolve();
    }, 2000);
  });
};

const delayAndLogThree = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(3);
      resolve();
    }, 3000);
  });
};

const runSequentially = (tasks) => {
  return tasks.reduce((previousPromise, currentTask) => {
    return previousPromise.then(currentTask);
  }, Promise.resolve());
};

runSequentially([delayAndLogOne, delayAndLogTwo, delayAndLogThree]).then(() => {
  console.log('Выполнено');
});
