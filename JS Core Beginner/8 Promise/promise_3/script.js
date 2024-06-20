// Напишите функцию, которая одновременно
// извлекает данные из нескольких API и
// возвращает объединенный результат,
// используя Promises

const endpoints = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
];


function fetchDataFromAPI(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Ошибка при загрузке ${url}, статус: ${response.status}`);
        }
        return response.json();
      })
      .then(data => resolve({ url, data }))
      .catch(error => reject(error));
  });
}

function fetchMultipleAPIs(apiUrls) {
  const promises = apiUrls.map(url => fetchDataFromAPI(url));

  return Promise.all(promises);
}

function displayResults(results) {
  results.forEach(result => {
    console.log(`Данные из: ${result.url}:`, result.data);
  });
}

function handleError(error) {
  console.error(error);
}

fetchMultipleAPIs(endpoints)
  .then(displayResults)
  .catch(handleError);