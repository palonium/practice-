// Напишите функцию, которая сначала
// загружает данные с одного сервера, а затем
// использует эти данные для выполнения
// запроса к другому серверу. Используйте
// async/await для обеспечения
// последовательного выполнения запросов

const asyncLoad = async (getDataUrl, sendDataUrl) => {
  let dataForSend = await fetch(getDataUrl);
  dataForSend = await dataForSend.json();
  let result = await fetch(sendDataUrl + dataForSend.userId);
  result = await result.json();
  console.log(result);
};

const api1 = "https://jsonplaceholder.typicode.com/posts/34";
const api2 = "https://jsonplaceholder.typicode.com/users/";

asyncLoad(api1, api2);