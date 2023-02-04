// Require express.  
const express = require('express');

// Require cookie-parser.  I have to put this line of code after requiring express and before const app = express() or else it doesn't work.   
const cookieParser = require('cookie-parser');

const app = express();

// Use cookieParser as a middleware, every time a function is invoked, this middleware is invoked.  
// The string 'thisismysecret' is going to be used by cookieParser to sign the cookies if I want them to be signed.  
app.use(cookieParser('thisismysecret'));

// Print out the cookie with the property of 'name' if I go to localhost:3000/greet, default name's value is 'anon'.  
app.get('/greet', (req, res) => {
    const { name = "anon" } = req.cookies;
    res.send(`Hey there, ${name}!`);
});

// If I go to localhost:3000/setname, I will receive two cookies.  
app.get('/setname', (req, res) => {
    res.cookie('name', 'henrietta');
    res.cookie('animal', 'harlequinn shrimp');
    res.send('OK, sent you two cookies!');
});

// If I go to localhost:3000/getsignedcookie, I will get a signed cookie with property name of 'fruit' and the value of 'grape'.  
app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true });
    res.send('OK, sent you a cookie!');
});

// localhost:3000/verifyfruit will print out all sign cookies.  
app.get('/verifyfruit', (req, res) => {
    res.send(req.signedCookies);
});

// Listen on port 3000.  
app.listen(3000, () => {
    console.log("Serving!");
});