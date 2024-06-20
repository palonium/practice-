// Напишите функцию, которая принимает
// массив с числами и находит сумму первой
// половины элементов этого массива

function halfSum(arr){
    let newArr = arr.slice(0, arr.length/2);
    let result = newArr.reduce((sum, current)=> sum + current);
    return result
}

console.log(halfSum([12, 34, 78, 35, 29, 43, 12, 48]))