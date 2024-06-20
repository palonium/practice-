// Напишите функцию, выполняющую серию
// асинхронных операций последовательно,
// используя Promises

const f1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(1);
      resolve();
    }, 1000);
  });
};

const f2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(2);
      resolve();
    }, 2000);
  });
};

const f3 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(3);
      resolve();
    }, 3000);
  });
};

const seqRunner = (deeds) => {
  return deeds.reduce((p, deed) => {
    return p.then(deed);
  }, Promise.resolve());
};

seqRunner([f1, f2, f3]).then(() => {
  console.log('выполнено');
});