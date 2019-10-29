const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const students = ["Natasha", "Shakti", "Santosh", "Allen", "James", "Blake"];

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/students", (req, res) => {
    res.send(students);
});

app.post("/students", (req, res) => {
    console.log(req.body);
    res.send("Hello World!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))