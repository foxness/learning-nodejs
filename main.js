const fs = require("fs")
const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const dataFile = "data.txt"

const port = 80

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'))

app.get('/', (req, res) =>
{
    fs.readFile(dataFile, (err, data) =>
    {
        res.render('index', {data: data.toString().split('\n')})
    })
})

app.post('/add', (req, res) =>
{
    var newText = req.body.text
    console.log(`Got new text: ${newText}`)
    fs.appendFile(dataFile, "\n" + newText, (err) =>
    {
        if (err)
            throw err
    })
})

app.listen(port, () =>
{
    console.log('Server running at http://localhost:' + port + '/')
})