// Напишите функцию, которая принимает
// массив URL-адресов и параллельно
// загружает содержимое каждого URL-адреса с
// помощью Promises.

const getData = (urls) => {
  const promises = urls.map((url) => fetch(url));

  Promise.all(promises)
    .then((responses) =>
      Promise.all(responses.map((response) => response.json()))
    )
    .then((data) =>
      console.log(
        JSON.stringify(
          data.map((item, index) => ({ [index]: item[0] })),
          undefined,
          2
        )
      )
    );
};

const URLS = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts/6",
  "https://jsonplaceholder.typicode.com/comments",
];

getData(URLS);
