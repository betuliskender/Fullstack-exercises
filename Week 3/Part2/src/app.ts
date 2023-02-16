import { renderPeopleList } from "./peopleList";
import getPeople from "./people";


const container = document.getElementById('people')
const people = getPeople()

renderPeopleList(container!, await people)