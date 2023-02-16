import people from "./people.json";
import Person from "./main"

export default function getPeople(): Promise<Person[]>{
    return new Promise((resolve) => {
        let peopleArray: Person[] = new Array
    people.forEach(person => {
        peopleArray.push(new Person(person.name, person.age, person.occupation, person.salary))
    })
    resolve(peopleArray)
    })
    
}
