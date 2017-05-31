// var http = require("http")
const fs = require("fs")
const path = require('path');
const express = require('express')
const app = express()

const port = 80

app.set('view engine', 'ejs');

app.get('/', function(req, res)
{
    fs.readFile('data.txt', function (err, data)
    {
        res.render('index', {data: data.toString().split('\r\n')})
    });
});

app.listen(port)

console.log('Server running at http://localhost:' + port + '/')