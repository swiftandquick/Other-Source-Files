// Require express.  
const express = require('express');
const app = express();

// Require morgan.  
const morgan = require('morgan');

// Require the AppError object from AppError.js.  
const AppError = require('./AppError');

// Use the morgan middleware.  
app.use(morgan('tiny'));

app.use((req, res, next) => {
    // Make every method a GET method.  
    // req.method = 'GET';
    // Set requestTime to current date.  
    req.requestTime = Date.now();
    // Print out the method (GET, POST, etc.) and path to URL.  
    console.log(req.method, req.path);
    next();
});

// This middleware only runs on localhost:3000/dogs, "I love dogs!" will not print in console for any other web page.  
app.use('/dogs', (req, res, next) => {
    console.log("I love dogs!");
    next();
});

// Set the password equals to the query, if query is chickennugget, go to the next middleware, otherwise, throw an error, set status to 401.  
const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
        next();
    }
    else {
        // res.send('Sorry, you need a password!');
        throw new AppError('Password required!', 401);
    }
}

/*
// This app.use() function runs on every request, so the string will be printed on console, then move onto the next middleware.  
app.use((req, res, next) => {
    console.log("This is my first middleware!");
    // return exits out of the function, makes sure nothing happens after next();
    return next();
    // If I put codes after next(), it will still run, but it will execute after the next middleware is executed. 
    // If the next middleware calls next() for the third middleware, then the code after next() will be executed after the third middleware.  
    // But since the return keyword is used before the code below next(), function will be exited and the code below next() will not run.  
    console.log("This is my first middleware, after calling next().");
});

// This app.use() function will execute on every request, but after the first middleware is done.  
app.use((req, res, next) => {
    console.log("This is my second middleware!");
    return next();
});

// This app.use() function will execute on every request, but after the second middleware is done.  
app.use((req, res, next) => {
    console.log("This is my third middleware!");
    return next();
});
*/

// localhost:3000.  
app.get('/', (req, res) => {
    console.log(`Request Date: ${req.requestTime}`);
    res.send("Home page!");
});

// localhost:3000/error will have an error because chicken is undefined.  
app.get('/error', (req, res) => {
    chicken.fly();
});

// localhost:3000/dogs.  
app.get('/dogs', (req, res) => {
    console.log(`Request Date: ${req.requestTime}`);
    res.send("Woof woof!");
});

// localhost:3000/secrets.  Invoke the verifyPassword function() before execute the codes inside the function.  
app.get('/secret', verifyPassword, (req, res) => {
    res.send('My secret is:  sometimes I wear headphones in public!');
});

// Typically, middleware need to call next(), but this is a route handler, if the no route matches, execute this function.  
app.use((req, res) => {
    res.status(404).send("Not found!");
});

/*
// Any time there’s an error via a request, console will print out “There is an error!” and the error, then pass onto next error handling middleware.  
app.use((err, req, res, next) => {
    console.log("There is an error!");
    console.log(err);
    next(err);
});
*/

// In case of error via request, console will print out "Error!", also set the status code to status code from the returned error object.  
// If the error has no status code, give it the default value of 500.  
// The error message defines what's wrong with the code.  Set the message to 'Something went wrong!' if it's not defined.  
app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong!' } = err;
    res.status(status).send(message);
});

// Listen on port 3000.  
app.listen(3000, () => {
    console.log("Listening on port 3000.");
});