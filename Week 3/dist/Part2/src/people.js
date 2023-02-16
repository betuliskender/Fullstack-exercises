import people from "./people.json";
import { Person } from "./main";
export function getPeople() {
    return new Promise((resolve) => {
        let peopleArray = new Array;
        people.forEach(person => {
            peopleArray.push(new Person(person.name, person.age, person.occupation, person.salary));
        });
        resolve(peopleArray);
    });
}
