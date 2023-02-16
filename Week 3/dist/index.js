"use strict";
const helloworld = (name) => {
    return `Hello ${name}`;
};
console.log(helloworld('Betül'));
document.getElementById('root').innerHTML = helloworld('World');
class Person {
    name;
    age;
    gender;
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
let names = ['Bjanre', 'Ali', 'Leila', 'Sammi', 'Jytte', 'Anastasia', 'Freja', 'Maria', 'Denis', 'Natasja'];
let genders = ['male', 'female', 'nonbinary'];
let age = [12, 21, 43, 23, 65, 45, 13, 32, 65, 32];
function populator() {
    let personList = new Array;
    for (let i = 0; i < 10; i++) {
        let person = new Person(getRandomElement(names), getRandomElement(age), getRandomElement(genders));
        personList.push(person);
    }
    return personList;
}
console.log(populator());
