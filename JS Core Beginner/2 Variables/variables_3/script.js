// Напишите код, в котором попытаетесь
// обратиться к переменной до её объявления с
// использованием var, let и const. Определите,
// какие переменные допускают такое
// использование, а какие нет

console.log(x); 
var x = 10;

console.log(y); // Ошибка: ReferenceError: Cannot access 'y' before initialization
let y = 10;

console.log(z); // Ошибка: ReferenceError: Cannot access 'z' before initialization
const z = 10;

//объявление через var приведет к undefinde, let и const вызовут ошибку