// Напишите функцию, которая использует
// async/await для загрузки данных с удаленного
// сервера (например, с помощью API) и
// возвращает полученный результат.

async function wrapper(url) {
  async function getData(url) {
      try {
          const result = await fetch(url);
          return await result.json();
      } catch (err) {
          return null;
      }
  }
  console.log(await getData(url));
}

wrapper("https://jsonplaceholder.typicode.com/users");