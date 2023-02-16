const helloworld = (name: string) => {
    return `Hello ${name}`;
}

console.log(helloworld('Betül'));
document.getElementById('root')!.innerHTML = helloworld('World');

class Person {
    name: string;
    age: number;
    gender: string;

    public constructor(name: string, age: number, gender: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

}

const getRandomElement = (arr: any[]) => 
    arr[Math.floor(Math.random()* arr.length)]


let names: string[] = ['Bjanre', 'Ali', 'Leila', 'Sammi', 'Jytte', 'Anastasia', 'Freja', 'Maria', 'Denis', 'Natasja'];
let genders: string[] = ['male', 'female', 'nonbinary'];
let age: number[] = [12, 21, 43, 23, 65, 45, 13, 32, 65, 32];

function populator (): Array<Person> {
    let personList = new Array<Person>;
    for( let i = 0; i < 10; i++){
        let person = new Person(getRandomElement(names), getRandomElement(age), getRandomElement(genders))
        personList.push(person)
    }
    return personList;
}

console.log(populator())

