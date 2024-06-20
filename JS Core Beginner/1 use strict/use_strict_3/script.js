// Напишите функцию, которая принимает
// строку и возвращает количество гласных
// букв в ней.

'use strict'
function checkVowels(str){
    let vowels= ['a', 'e', 'i', 'o', 'u'];

    str = str.toLowerCase();
    let counter = 0;
    for(let i = 0; i<str.length; i++){
        if(vowels.includes(str[i])){
            counter++
        }
    }

    return counter;
}

let str = "cjjcdo jjnfnuty sp"
console.log(checkVowels(str))
