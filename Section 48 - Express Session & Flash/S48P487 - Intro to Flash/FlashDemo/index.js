// Require express package.  
const express = require('express');
const app = express();

// Require path from Node.  
const path = require('path');

// Require the mongoose package.  
const mongoose = require('mongoose');

// Require express session.  
const session = require('express-session');

// Require express flash.  
const flash = require('connect-flash');

const sessionOptions = { secret: 'thisisnotagoodsecret', resave: false, saveUninitialized: false };
app.use(session(sessionOptions));

// Use flash as a middleware.  
app.use(flash());

// Require the Farm variable from farm.js, which is in the models folder.  
const Farm = require('./models/farm');

mongoose.connect('mongodb://127.0.0.1:27017/flashDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection open!");
    })
    .catch(error => {
        console.log("Error!");
        console.log(error);
    });


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));


// Farm routes.  

// Set up a middleware so we don’t have to pass the value of req.flash() on every function.  
app.use((req, res, next) => {
    res.locals.messages = req.flash('success');
    next();
});

app.get('/farms', async (req, res) => {
    const farms = await Farm.find({});
    res.render('farms/index', { farms });
});

app.get('/farms/new', (req, res) => {
    res.render('farms/new');
});

app.get('/farms/:id', async (req, res) => {
    const farm = await Farm.findById(req.params.id).populate('products');
    res.render('farms/show', { farm });
});

// If the form submission is a success, display 'Successfully made a farm!' on the redirected page.  
app.post('/farms', async (req, res) => {
    const farm = new Farm(req.body);
    await farm.save();
    req.flash('success', 'Successfully made a new farm!');
    res.redirect('/farms');
});

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!");
});