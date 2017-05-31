// var http = require("http")
const fs = require("fs")
const path = require('path');
const express = require('express')
const app = express()

var port = 80
var data = fs.readFileSync('data.txt').toString().split('\r\n')//.map(v => v.trim())

app.set('view engine', 'ejs');

app.get('/', function (req, res)
{
    res.render('index')
});

app.listen(port)

console.log('Server running at http://localhost:' + port + '/')