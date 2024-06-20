// Создайте класс под названием
// «Прямоугольник» со свойствами ширины и
// высоты. Включите два метода расчета
// площади и периметра прямоугольника.
// Создайте экземпляр класса «Прямоугольник»
// и вычислите его площадь и периметр

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    perimeter(){
        return `Периметр:${2*this.width + 2*this.height}`
    }

    square(){
        return `Площадь:${this.width * this.height}`
    }
}

let rectangle = new Rectangle(10, 20)

console.log(rectangle.perimeter(), rectangle.square())