// Напишите функцию, которая принимает
// массив с числами и увеличивает каждое
// число из массива на 10 процентов.

function increaseArray(arr){
    let array = arr.map((x)=> x+x/10)
    return array
}

console.log(increaseArray([1, 2, 3, 4, 5]))