// Require express.  
const express = require("express");
const app = express();

// Require express-session.  
const session = require('express-session');

// Set up a middleware, every time a function runs, invoke the session() method, the secret is 'thisisnotagoodsecret'.  
const sessionOptions = { secret: 'thisisnotagoodsecret', resave: false, saveUninitialized: false }
app.use(session(sessionOptions));

// localhost:3000/viewcount displays how many times I viewed the web page.  
// If there is no count variable in req.session, set it to 1, otherwise, increment the count variable by 1.  
app.get('/viewcount', (req, res) => {
    if (req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }
    res.send(`You have viewed this page ${req.session.count} times`)
});

// On localhost:3000/register, the query's name is username, and the default value of username is anon.  
// Set the session's username variable to username.  Redirect to localhost:3000/greet.  
app.get('/register', (req, res) => {
    const { username = 'anonymous' } = req.query;
    req.session.username = username;
    res.redirect('/greet');
});

// Display the username on localhost:3000/greet depend on what the username's value is for localhost:3000/register.  
app.get('/greet', (req, res) => {
    const { username } = req.session;
    res.send(`Welcome back, ${username}`);
});

// Listen on port 3000.  
app.listen(3000, () => {
    console.log("Listening on port 3000.");
});