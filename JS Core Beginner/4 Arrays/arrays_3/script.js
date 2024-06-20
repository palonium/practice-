// Напишите функцию, которая принимает
// массив с числами и находит сумму квадратов
// элементов этого массива.

function squareOfArray(arr){
    let result = arr.reduce((sum, current)=> sum + current*current, 0)

    return result
}

console.log(squareOfArray([3, 9, 10, 3, 1, 5]))