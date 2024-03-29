const express = require("express")
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');


const app = express();
const port = 3000;


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require('./routes'))



app.listen(port, () => console.log(`running server on ${port}!`))