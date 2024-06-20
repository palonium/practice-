// Создайте класс под названием «Человек» со
// свойствами имени, возраста и страны.
// Включите метод для отображения сведений о
// человеке. Создайте два экземпляра класса
// «Человек» и отобразите их сведения

class Human{
    constructor(name, age, country){
        this.name = name;
        this.age = age;
        this.country = country;
    }

    info(){
        return `Имя:${this.name}, возраст:${this.age}, страна проживания:${this.country}`
    }
}

const human1 = new Human("Polina", 20, "Belarus");
const human2 = new Human("Adam", 21, "Bulgaria");

console.log(human1.info());
console.log(human2.info());