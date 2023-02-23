import { useEffect, useState } from 'react'
import './App.css'

function App() {
  console.log("App component is rendered")
  const [name, setName] = useState<string>("initial name")

  return (
    <div className="App">
      <In name={name} setName={setName}/>
      <Out name={name}/>
      <PeopleViewer />
    </div>
  )
}

const In = ({name, setName}:{name:string, setName:React.Dispatch<React.SetStateAction<string>>}) => {
  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
    </div>
  )
};
const Out = ({name}:{name:string}) => {
  console.log("In component is rendered")
  return (
    <div>
      <p>{name}</p>
    </div>
  )
};
const PeopleViewer = () => {
  type Person = {
    id: number
    name: string
    age: number
    city: string
  }
  const [people, setPeople] = useState<Person[]>([]);
  const [newPerson, setNewPerson] = useState<Person>({
    id: 0,
    name: "",
    age: 0,
    city: ""
  }
  )
    
  useEffect(() => {
    fetch("http://localhost:3008/person")
      .then(response => response.json())
      .then(json => setPeople(json));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setNewPerson({...newPerson, [e.target.id]: e.target.value})
  }

  const addPerson = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetch("http://localhost:3008/person", {
            method: "POST",
            body: JSON.stringify({
              name: newPerson.name,
              age: newPerson.age,
              city: newPerson.city,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
    setPeople([...people, newPerson])

  }

  const removePerson = () => {
    setPeople(people.slice(0, -1))
  }

  const sortList = () => {
    setPeople([...people].sort((a, b) => a.age - b.age))
    
  }  

  const updatePerson = (updatedPerson: Person) => {
    const updatedPeople = people.map((person) => {
      if (person.id === updatedPerson.id) {
        return updatedPerson;
      } else {
        return person;
      }
    });
    setPeople(updatedPeople);
  }

  return (
    <div>
      <h1>People</h1>
      <form onSubmit={addPerson}>
        {/* <input id="id" type="number" placeholder='Id' onChange={handleChange} /> */}
        <input id="name" type="text" placeholder='Name' onChange={handleChange} />
        <input id="age" type="number" placeholder='Age' onChange={handleChange} />
        <input id="city" type="text" placeholder='City' onChange={handleChange} />
        <button>Add Person</button>
      </form>
      <button onClick={removePerson}>Remove Person</button>
      <button onClick={sortList}>Sort by Age</button>
      <table>
        <thead> <tr> <th>Id</th> <th>Name</th> <th>Age</th> <th>City</th> </tr> </thead>
        <tbody>
          {people.map((person) => {
            return (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.city}</td>
              <td><button onClick={() => updatePerson({ ...person, name: newPerson.name, age: newPerson.age, city: newPerson.city })}>
                  Update
                </button></td>
            </tr>
            )
          }
          )
          }
        </tbody>
      </table>
      </div>
  )
}
export default App

// import {useEffect, useState } from 'react'
// import './App.css'
// import PeopleViewer from './PeopleViewer';

// export interface IPeople{
//   people:{
//     id:number;
//     name: string;
//     age: number;
//     city: string;
//   }[]
// }

// function App() {
//   // const [name, setName] = useState<string>("")
//   const [people, setPeople] = useState<IPeople["people"]>()

//   useEffect(() => {
//     fecthPeople()
//     }, [])

//     async function fecthPeople() {
//       const req = await fetch('http://localhost:3008/person');
//       const data = await req.json()
//       setPeople(data)
//     }
  
//   return (
//     <div className="App">
//       {/* <Input name={name} setName={setName}/> */}
//       <PeopleViewer people={people}/>
//     </div>
//   )
// }

// // function Input({name, setName}:{name:string, setName:React.Dispatch<React.SetStateAction<string>>}) {
// //   return(
// // <form action="">
// //         <label htmlFor="">Name: </label>
// //         <input type="text"  name="name" value={name} onChange={(e) => setName(e.target.value)}/>
// //         {/* <label htmlFor="">Age: </label>
// //         <input type="text"  name="age" value={props.age} onChange={(e) => props.setAge(parseInt(e.target.value))}/>
// //         <label htmlFor="">Email: </label>
// //         <input type="text"  name="email" value={props.email} onChange={(e) => props.setEmail(e.target.value)}/> */}
// //       </form>
// //   )
// // }

// export default App
