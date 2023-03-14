import express = require('express');
import morgan = require('morgan');
import * as fs from 'fs';

const app = express();
//console.log(process.env);

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
    console.log('Development mode')
}

app.use(express.json()); //body parse

app.get('/', (req, res) => {
    res.status(200)
        .json({
            status: 'succes',
            message: `Hello`
        })
})

app.get('/people', (req, res) => {
    const people = fs.readFileSync(`${__dirname}/people.json`, 'utf-8');
    res.status(200)
    .header({
        "Content-Type": 'application/json',
        "Content-Length": people.length
    })
        .json({
            status: 'succes',
            data: JSON.parse(people)
        })
})

app.get('/people/:id', (req, res) => {
    const people = fs.readFileSync(`${__dirname}/people.json`, 'utf-8');
    const data = JSON.parse(people)
    var id = +req.params.id;
    const person = data.person.find((person: { id: number; }) => person.id === id);
    res.send(person);
})

app.post("/people", (req, res) => {

    const jsonData = req.body
    const data = fs.readFileSync("./people.json", 'utf-8');
    const info = JSON.parse(data)

    info.person.push(jsonData)

    fs.writeFile("./people.json", JSON.stringify(info, null, 1), err => {
        if (err) throw err;
        res.status(201).send("New Person Added")
    })

})

app.put('/people/:id', (req, res) => {
    const people = fs.readFileSync(`${__dirname}/people.json`, 'utf-8');
    const data = JSON.parse(people)
    var id = +req.params.id;
    const person = data.person.findIndex((person: { id: number; }) => person.id === id);
    let newPerson = req.body
    data.person[person] = newPerson
    if(data.person[person] == newPerson)
    {
        fs.writeFile("./people.json", JSON.stringify(data, null, 1), err => {
            if (err) throw err;
            res.status(201).send("Person updated")
        })
    }
})

app.patch('/people/:id', (req, res) => {
    const people = fs.readFileSync(`${__dirname}/people.json`, 'utf-8');
    const data = JSON.parse(people)
    var id = +req.params.id;
    const person = data.person.findIndex((person: { id: number; }) => person.id === id);
    let newPerson = req.body
    if(newPerson.name != undefined){
        data.person[person].name = newPerson.name
    }
    if(newPerson.age != undefined){
        data.person[person].age = newPerson.age
    }
    if(newPerson.city != undefined){
        data.person[person].city = newPerson.city
    }
    
        fs.writeFile("./people.json", JSON.stringify(data, null, 1), err => {
            if (err) throw err;
            res.status(201).send("Person updated")
        })
    
})

app.delete('/people/:id', (req, res) => {
    const people = fs.readFileSync(`${__dirname}/people.json`, 'utf-8');
    const data = JSON.parse(people)
    var id = +req.params.id;
    const person = data.person.findIndex((person: { id: number; }) => person.id === id);
    data.person.splice(person, 1)

     fs.writeFile("./people.json", JSON.stringify(data, null, 1), err => {
            if (err) throw err;
            res.status(201).send("Person deleted")
        })
})



app.listen(3000, () => {
    console.log(`Server is listening to http:/localhost:3000`)
})