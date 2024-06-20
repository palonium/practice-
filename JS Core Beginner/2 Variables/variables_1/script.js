// Создайте блок кода внутри функции и
// объявите переменную с именем x с
// использованием var, let и const. Попытайтесь
// обратиться к этой переменной как внутри, так
// и вне блока. Какие переменные видны
// снаружи блока, а какие нет?

'use strict'

function exampleFunction() {
    var x = 1;
  
    if (true) {
      let x = 2; 
      const y = 3;

      console.log(x); 
      console.log(y); 
    }

    console.log(x);
  
    console.log(y);
  }
  
  exampleFunction();