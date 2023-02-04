// Require express.  
const express = require('express');
const app = express();

// Require path from Node.  
const path = require('path');

// Require mongoose.  
const mongoose = require('mongoose');

// Require bcrypt.  
const bcrypt = require('bcrypt');

// Require express-session.  
const session = require('express-session');

// Import model from user.js from models folder.  
const User = require('./models/user');

// Connect to the database authDemo via mongoose.  
mongoose.connect('mongodb://127.0.0.1:27017/authDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection open!");
    })
    .catch(error => {
        console.log("Error!");
        console.log(error);
    });

// Set view engine to ejs and set views to the views folder that includes the absolute path.  
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Make it so I can parse req.body.  
app.use(express.urlencoded({ extended: true }));

// Create a session middleware that gives us back a cookie every time I browse the web page.  
app.use(session({ secret: 'notagoodsecret' }));

// If user_id doesn't exist, redirect to localhost:3000/login, otherwise, call the next middleware.  
const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/login');
    }
    else {
        next();
    }
}

// localhost:3000 is the home page.  
app.get('/', (req, res) => {
    res.send("This is the home page.");
});

// localhost:3000/register renders the register.ejs template.  
app.get('/register', (req, res) => {
    res.render('register');
});

// When the form on localhost:3000/register is submitted, a POST request will be sent to localhost:3000/register.  
app.post('/register', async (req, res) => {
    // Deconstruct req.body, get the password and username variables.  
    const { password, username } = req.body;
    // Create User object, put in username and password as arguments.  
    const user = new User({ username, password });
    // Insert User object into the authDemo database.  Before save() is invoked, password is hashed by a function in user.js.  
    await user.save();
    // After I sign up, set the user's _id value as user_id (req.session variable) in the session.  
    req.session.user_id = user._id;
    res.redirect('/secret');
});

// localhost:3000/login renders login.ejs template.  
app.get('/login', (req, res) => {
    res.render('login');
});

// When a form on localhost:3000/login is submitted, a POST request will be sent to localhost:3000/login.  
app.post('/login', async (req, res) => {
    // Deconstruct req.body, get the password and username variables.  
    const { password, username } = req.body;
    // Invoke the findAndValidate() found on userSchema, pass in username and password as arguments.  
    const foundUser = await User.findAndValidate(username, password);
    // If foundUser exists, store the foundUser's _id value as user_id (req.session variable) in the session.  
    // Redirect to localhost:3000/secret if login successfully, otherwise redirect to localhost:3000/login.  
    if (foundUser) {
        req.session.user_id = foundUser._id;
        res.redirect('/secret');
    }
    else {
        res.redirect('/login');
    }
});

// POST request to localhost:3000/logout sets the user_id to null or destroy the session, then redirect user to localhost:3000/login.  
app.post('/logout', (req, res) => {
    // req.session.user_id = null;
    req.session.destroy();
    res.redirect('/login');
});

// In localhost:3000/secret, use the requireLogin function as the middleware function.  
// If user_id exists, call next() and render secret.ejs template.  
app.get('/secret', requireLogin, (req, res) => {
    res.render('secret');
});

// localhost:3000/topsecret is similar to localhost:3000/secret, if user_id exists, then call next() and display "Top secret!".  
app.get('/topsecret', requireLogin, (req, res) => {
    res.send("Top secret!");
})

// Listen on port 3000.  
app.listen(3000, () => {
    console.log("Listening on port 3000.");
});