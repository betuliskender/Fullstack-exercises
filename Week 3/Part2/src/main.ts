export default class Person{
  name: string;
  age: number;
  occupation: string;
  private_salary: number;

  public constructor(name: string, age: number, occupation: string, private_salary: number = 0){
      this.name = name;
      this.age = age;
      this.occupation = occupation;
      this.private_salary = private_salary;
  }

  incrementAge(): void {
    this.age++
  }

  setSalary(salary: number): void {
    this.private_salary = salary;
  }

  getSalary(): number{
    return this.private_salary;
  }

}

let person1 = new Person("Peter", 25, "Doctor", 100000)

function introduce(Person: Person ) {
  return `Hello my name is ${Person.name} and i am ${Person.occupation}. I earn ${Person.private_salary}`
}

console.log(introduce(person1))
console.log(person1.setSalary(2000000))
console.log(person1.getSalary())
console.log(introduce(person1))

