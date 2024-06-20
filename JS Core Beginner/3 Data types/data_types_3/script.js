// Напишите функцию, которая принимает
// число и выводит в консоль сумму первой и
// последней цифры этого числа

function lastNumber(num){
    let str = String(num);

    let arr = Array.from(str, Number);

    return arr[0] + arr[arr.length - 1]
}

console.log(lastNumber(123456))