// Напишите функцию, которая параллельно
// загружает данные с нескольких удаленных
// серверов, используя Promise.all в сочетании с
// async/await

const asyncLoad = async (getDataUrl, sendDataUrl) => {
    let dataForSend = await fetch(getDataUrl);
    dataForSend = await dataForSend.json();
    let result = await fetch(sendDataUrl + dataForSend.userId);
    result = await result.json();
    console.log(result);
  };
  
  const api1 = "https://jsonplaceholder.typicode.com/posts/56";
  const api2 = "https://jsonplaceholder.typicode.com/users/";
  
  asyncLoad(api1, api2);