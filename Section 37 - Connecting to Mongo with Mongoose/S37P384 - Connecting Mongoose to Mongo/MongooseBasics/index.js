/* Note that every time I run node index.js on the second Git Bash window, I insert 6 objects, so I have to 
    delete all elements in the mongo shell (third Git Bash window) via db.movies.remove({}) before I 
    run this file on the second Git Bash window in Node REPL, to run this file, do not type in node index.js, 
    but instead, type in node, then type in .load index.js.  Now I comment out the codes that insert objects 
    because I already have those objects in the database.  
*/

// Require the mongoose package.  
const mongoose = require('mongoose');

// Connect to the database movieApp.  
mongoose.connect('mongodb://127.0.0.1:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection open!");
    })
    .catch(error => {
        console.log("Error!");
        console.log(error);
    });

// I created a schema called movieSchema, I can define the property title to be a String and year to be a number in a schema.  
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

// Create a model class called Movie, save it to a variable.  
const Movie = mongoose.model('Movie', movieSchema);

/*
// Create a new Movie object, save the object to the variable amadeus.  
const amadeus = new Movie({
    title: 'Amadeus',
    year: 1986,
    score: 9.2,
    rating: 'R'
})

// Save the object to the movieApp database.  
amadeus.save();

Movie.insertMany([
    { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
    { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
    { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
    { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
    { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
])
    .then(data => {
        console.log("It worked!");
        console.log(data);
    })
    .catch(error => {
        console.log("Failed to insert data!");
        console.log(error);
    });
*/