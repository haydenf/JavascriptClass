const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require('body-parser')

global.HttpError = class HttpError extends Error {
    constructor(code, message) {
        super(message)
        this.name = 'HttpError';
        this.statusCode = code;
    }
}
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

// middleware function 
app.use((req, res, next) => {
    // middleware functions hsve access top req and response functions
    console.log('url', req.url);
    console.log('method', req.method);
    console.log('body', req.body || {});
    console.log('middleware running');
    // invoke the next function in the request life cycle

    next();
});
app.use(require('./routes'));

// error handling with middleware
app.use((err, req, res, next) => {
    // console.log('error logged with middle ware', err);
    if (err && err.name === 'HttpError') {
        return res.status(err.statusCode).send(err.name)
    }
    next();
});

app.listen(port, () => {
    console.log(`running server on port ${port}`)
})