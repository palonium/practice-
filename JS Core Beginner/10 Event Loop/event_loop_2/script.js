// Напишите функцию, которая извлекает
// данные из API и отменяет запрос, если он
// занимает больше указанного времени.

function fetchDataWithTimeout(url, timeout) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
  
    return fetch(url, { signal: controller.signal })
      .then(response => {
        clearTimeout(timeoutId);
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        return response.json();
      })
      .catch(error => {
        if (error.name === 'AbortError') {
          throw new Error('Request timed out');
        } else {
          throw error;
        }
      });
  }
  
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const timeout = 5000;
  
  fetchDataWithTimeout(apiUrl, timeout)
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });