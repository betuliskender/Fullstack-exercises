import express = require('express');
import morgan = require('morgan');
import * as fs from 'fs';
import {Request} from 'express'


const app = express();
//console.log(process.env);

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
    console.log('Development mode')
}

app.use(express.json()); //body parse
app.use(express.static(`${__dirname}/public`)); //http://localhost:3000/home.html


//Middleware
app.use((req, res, next) => {
    console.log("Hello from the middleware");
    next();
})

app.use((req: Request, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
})

app.get('/', (req: Request, res) => {

    const date = req.requestTime;
    
    res.status(200)
        .json({
            status: 'succes',
            message: date
        })
})

//with params
app.get('/hello', (req, res) => {
    res.status(200)
        .json({
            status: 'succes',
            message: `Hello ${req.query.name}`
        })
})

//with query
app.get('/hello/:name', (req, res) => {
    res.status(200)
        .json({
            status: 'succes',
           //message: `Hello ${req.params.name}`
            message: `Hello ${req.params.name || "World"}`
        })
})

//error
app.get('/error', (req, res) => {
    try {
        throw new Error("Went wrong!!");
        res.status(200)
        .json({
            status: 'succes',
           //message: `Hello ${req.params.name}`
            message: `Hello World}`
        })
    } catch (err: any) {
        res.status(400)
        .json({
            status: 'failed',
            message: err.message
        })
    }
    
})

//json data
app.get('/data', (req, res) => {
    const data = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');
    res.status(200)
    .header({
        "Content-Type": 'application/json',
        "Content-Length": data.length
    })
        .json({
            status: 'succes',
            data: JSON.parse(data)
        })
})

//post json data
app.post('/', (res, req) => {
    const jsonData = res.body;
    console.log()
    req.status(201)
    .json({
        status: 'succes',
        data: jsonData
    })
})


app.listen(3000, () => {
    console.log(`Server is listening to http:/localhost:3000`)
})
