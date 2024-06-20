// Напишите функцию, которая принимает
// число в качестве параметра и выдает
// пользовательскую ошибку, если число не
// является целым числом.

function checkInteger(num) {
    if (!Number.isInteger(num)) {
      throw new Error('не является целым числом');
    }
    console.log(num);
  }
  
  try {
    checkInteger(2.2);
  } catch (error) {
    console.log(error.message); 
  }