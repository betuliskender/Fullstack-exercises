"use strict";
// import * as dotenv from 'dotenv';
// import * as http from 'http';
// import * as url from "url";
// import * as fs from 'fs';
exports.__esModule = true;
// dotenv.config({path: '/..config.env'});
// // Part 1
// const data = fs.readFileSync(`${__dirname}/../data.json`, 'utf-8');
// const server = http.createServer((req, res) => {
//     const {query, pathname, path, href, search} = url.parse(req.url!, true);
//     // Set responds header
//     res.writeHead(200, {"Content-Type": "text/html"});
//     // const pathname = req.url;
//     console.log(pathname)
//     fs.readFile(`${__dirname}/public/homepage.html`,'utf-8', (err, data) => {
//         res.end(data);
//     });
//     if(pathname === '/') {
//         res.writeHead(200, {"Content-Type": "text/html"});
//         fs.readFile(`${__dirname}/public/homepage.html`,'utf-8', (err, data) => {
//             res.end(data);
//         });
//     }else if (pathname === "/about") {
//         res.writeHead(200, {"Content-Type": "text/html"});
//         res.end("<h1>About</h1>")
//     } else if(pathname === "/data") {
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.end(data);
//     } else {
//         res.writeHead(400, {"Content-Type": "text/html"});
//         res.end(`Path ${pathname} does not exist.`)
//     }
//     // res.end("Hello World!");
// })
// server.listen({
//         host: process.env.HOSTNAME,
//         port: process.env.PORT,
//         exclusive: true
//     }, () => {
//         console.log(`Server is listening to http://localhost:${process.env.PORT}`)
//     }
// )
var dotenv = require("dotenv");
dotenv.config({ path: '../config.env' });
var http = require("http");
var url = require("url");
var fs = require("fs");
var logger_1 = require("../src/logger");
// PART 1
var data = fs.readFileSync("".concat(__dirname, "/../data.json"), 'utf-8');
var server = http.createServer(function (req, res) {
    var _a = url.parse(req.url, true), query = _a.query, pathname = _a.pathname, path = _a.path, search = _a.search;
    // Set response header
    res.writeHead(200, { "Content-Type": "text/html" });
    // const pathName = req.url;
    console.log(pathname);
    fs.readFile("".concat(__dirname, "/homepage.html"), 'utf-8', function (err, data) {
        console.log(data);
        res.end(data);
    });
    if (pathname === '/') {
        fs.readFile("".concat(__dirname, "/homepage.html"), 'utf-8', function (err, data) {
            console.log(data);
            res.end(data);
        });
    }
    else if (pathname === '/about') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>About</h1>");
    }
    else if (pathname === '/name') {
        console.log(search);
        console.log(query);
    }
    else if (pathname === '/data') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    }
    else {
        res.writeHead(400, { "Content-Type": "text/html" });
        res.end("Path ".concat(pathname, " does not exist."));
    }
    // res.end("Hello World!")
});
server.listen({
    host: process.env.HOSTNAME,
    port: process.env.PORT
}, function () {
    console.log("Server is listening to http://localhost:".concat(process.env.PORT));
    logger_1["default"].info("something");
});
