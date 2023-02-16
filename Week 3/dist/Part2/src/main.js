import { getPeople } from "./people";
export class Person {
    name;
    age;
    occupation;
    private_salary;
    constructor(name, age, occupation, private_salary = 0) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
        this.private_salary = private_salary;
    }
    incrementAge() {
        this.age++;
    }
    setSalary(salary) {
        this.private_salary = salary;
    }
    getSalary() {
        return this.private_salary;
    }
}
let person1 = new Person("Peter", 25, "Doctor", 100000);
function introduce(Person) {
    return `Hello my name is ${Person.name} and i am ${Person.occupation}. I earn ${Person.private_salary}`;
}
console.log(introduce(person1));
console.log(person1.setSalary(2000000));
console.log(person1.getSalary());
console.log(introduce(person1));
console.log(getPeople());
