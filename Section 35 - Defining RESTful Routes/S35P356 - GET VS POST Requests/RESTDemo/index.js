const express = require('express');
const app = express();
const path = require('path');

// Require the method-override package.  
const methodOverride = require('method-override');

// Require 'uuid' package.  Since we are using version 4, I created an object with the key of v4.  
const { v4: uuid } = require('uuid');

// Use the express.urlencoded() as a middleware function to parse incoming requests with urlencoded payloads.   
app.use(express.urlencoded({ extended: true }));

// Allow express to parse JSON data.  
app.use(express.json());

// '_method' is the string we are looking for in the query string.  
app.use(methodOverride('_method'));

// Set the views to a joined path of absolute path of current directory, then /views.  
app.set('views', path.join(__dirname, 'views'));

// Make the views engine to ejs.  
app.set('view engine', 'ejs');

let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof'
    }
]

// Set up a GET request, render the template based on index.ejs on localhost:3000/comments.    
app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
})

// Set up a GET request, render the template based on new.ejs on localhost:3000/comments/new.   
app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

// Set up a POST request for localhost:3000/comments.  
app.post('/comments', (req, res) => {
    // Retrieve the username (id of a <input>), and comment (id of <textarea>) after the form is submitted.  
    const { username, comment } = req.body;
    // Add the object with the properties of username and comment into the existing array comments.  
    comments.push({ id: uuid(), username, comment });
    // Redirects me to localhost:3000/comments immediately the form is submitted on localhost:3000/comments/new.  
    res.redirect('/comments');
})

// Set up a GET request for localhost:3000/comments/:id, id can be any available id value.  
app.get('/comments/:id', (req, res) => {
    /* req.params is an object of the req object that contains the route parameters.  If the params are specified 
    when a URL is built, then the req.params object will be populated when the URL is requested.  Here, since the 
    parameter is :id, so whatever I put in place of :id, like 1, 2, or 3, is the parameter.  I use a variable call 
    id to store the parameter's value, so if parameter is 1, id is 1.  
    */
    const { id } = req.params;
    // Find the comment (object) with an id property that has the same value of the id typed in the parameter.  
    const comment = comments.find(comment => comment.id === id);
    // Render the web page using the show.ejs file, pass in the comment (object) as argument.  
    res.render('comments/show', { comment });
})

// Set up a GET request for localhost:3000/comments/:id/edit.  
app.get('/comments/:id/edit', (req, res) => {
    // Retrieve the id from parameter, set it equals to the variable id.  
    const { id } = req.params;
    // Find the comment (object) with an id property that has the same value of the id typed in the parameter.  
    const comment = comments.find(comment => comment.id === id);
    // Render the web page using edit.ejs file, pass in the comment (object)  as argument.  
    res.render('comments/edit', { comment });
})

// Set up a PATCH request for localhost:3000/comments/:id, id can be any available id value.  
app.patch('/comments/:id', (req, res) => {
    // Retrieve the id from parameter, set it equals to the variable id.  
    const { id } = req.params;
    // Retrieve the comment object's comment variable from req.body, which is an object created after the form submission.   
    const newCommentText = req.body.comment;
    // Find the comment (object) with an id property that has the same value of the id typed in the parameter.  
    const foundComment = comments.find(comment => comment.id === id);
    // Set foundComment's (object) comment variable to newCommentText, which is the comment variable after form submission.  
    foundComment.comment = newCommentText;
    // Redirects me to localhost:3000/comments immediately the form is submitted on localhost:3000/comments/:id.  
    res.redirect('/comments');
})

// Set up a DELETE request localhost:3000/comments/:id.  
app.delete('/comments/:id', (req, res) => {
    // Retrieve the id from parameter, set it equals to the variable id.  
    const { id } = req.params;
    /* Use filter() to keep objects in the array where the id variable is not equal to the parameter.
    Update the comments array to the array without the comment with the same id as the parameter.  
    */
    comments = comments.filter(comment => comment.id !== id);
    // Redirects me to localhost:3000/comments immediately after the request is made.  
    res.redirect('/comments');
})

// GET request to /tacos.  
app.get("/tacos", (req, res) => {
    res.send("GET /tacos response.");
})

// POST request to /tacos.  
app.post("/tacos", (req, res) => {
    // Get the meat and qty's values from req.body object.  
    const { meat, qty } = req.body;
    // res.send("POST /tacos response.");
    // If I put pork as meat and 7 as qty, I will get a String:  OK, here are your 7 pork tacos.
    res.send(`OK, here are your ${qty} ${meat} tacos.`);
})

app.listen(3000, () => {
    console.log("On port 3000!");
})