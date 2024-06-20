// Напишите функцию для сравнения двух
// объектов, чтобы определить, содержит ли
// первый из них эквивалентные значения
// свойств по сравнению со вторым.

function equalObjects(obj1, obj2){
    return JSON.stringify(obj1) === JSON.stringify(obj2)
}

let object1 = {
    name: "Polina",
    age: 20,
}

let object2 ={
    name: "Polina",
    age: 20,
}

let object3 ={
    name: "Polmna",
    age: 23,
}

console.log(equalObjects(object1, object2))
console.log(equalObjects(object1, object3))