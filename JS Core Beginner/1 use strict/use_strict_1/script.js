// Напишите функцию для расчета факториала
// числа. Функция должна принимать число в
// качестве аргумента и возвращать его
// факториал. Учтите использование строгого
// режима.

'use strict'

function factorialFunction (number){

    let factorial = 1;
    let counter = 0;

    if(number === 0){
        return 1
    }else {
        for(let i=1; i<=number; i++){
            counter++;
            factorial*=counter;
        }
    }

    return factorial;
}

console.log(factorialFunction(0))