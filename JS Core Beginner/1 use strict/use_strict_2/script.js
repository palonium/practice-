// Напишите функцию, которая принимает
// массив и значение, и возвращает true, если
// это значение присутствует в массиве, и false,
// если нет. Используйте строгий режим.

'use strict'

function checkArray(array, number){
    if(array.includes(number)){
        return true
    }else{
        return false
    }
}

console.log(checkArray([1, 2, 5, 8, 9, 12], 9))
console.log(checkArray([1, 2, 5, 8, 9, 12], 7))