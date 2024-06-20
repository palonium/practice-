// Создайте класс «Сотрудник» со свойствами
// имени и зарплаты. Включите метод расчета
// годовой зарплаты. Создайте подкласс под
// названием «Менеджер», который
// наследуется от класса «Сотрудник» и
// добавляет дополнительное свойство для
// отдела. Переопределить метод расчета
// годовой зарплаты, чтобы включить бонусы
// для менеджеров. Создайте два экземпляра
// класса «Менеджер» и рассчитайте их годовую
// зарплату

class Employee{
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }

    yearSalary(){
        return this.salary * 12
    }
}

class Manager extends Employee{
    constructor(name, salary, department){
        super(name, salary);
        this.department = department;
    }

    yearSalaryManager(){
        return super.yearSalary() + 1050
    }
}

let manager1 = new Manager("Polina", 2000, "FrontEnd")
let manager2 = new Manager("Adam", 5000, "BackEnd")

console.log(manager1.name, manager1.department, manager1.yearSalaryManager())
console.log(manager2.name, manager2.department, manager2.yearSalaryManager())