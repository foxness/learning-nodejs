const fs = require("fs")
const express = require('express')
const bodyParser = require('body-parser');

const app = express()

const port = 80

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'))

app.get('/', (req, res) =>
{
    fs.readFile('data.txt', (err, data) =>
    {
        res.render('index', {data: data.toString().split('\r\n')})
    })
})

app.post('/add', (req, res) =>
{
    console.log(req.body.text);
})

app.listen(port, () =>
{
    console.log('Server running at http://localhost:' + port + '/')
})