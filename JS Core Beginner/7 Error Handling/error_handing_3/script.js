// Напишите функцию, которая принимает два
// числа в качестве параметров и выдает
// пользовательскую ошибку, если второе
// число равно нулю.

function ifNullNumber(num1, num2){
  if (num1 === 0) {
    throw new Error('второе число равно 0');
  }
  return num1/num2;

}

try {
  console.log(ifNullNumber(0, 1));
} catch (error) {
  console.error(error.message);
}

try {
  console.log(ifNullNumber(1, 0));
} catch (error) {
  console.error(error.message);
}