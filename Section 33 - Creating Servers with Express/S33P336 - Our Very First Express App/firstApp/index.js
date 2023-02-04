// Require 'express' directory.  
const express = require("express");

// Invoke the express() function, save it to a variable.  
const app = express();

/*
app.use((req, res) => {
    console.log("We got a new request!");
    // Create an <h1> element on localhost.  
    res.send('<h1>This is my web page!</h1>');
})
*/

// localhost:8080.  Home page.  Handle GET requests.  
app.get('/', (req, res) => {
    res.send('Welcome to the home page!');
})

// Everything after localhost:8080/r/ and before another / will route to the same page.  
app.get('/r/:subreddit', (req, res) => {
    // Create an <h1> element that includes the subreddit name.  
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit.</h1>`);
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID:  ${postId} on the ${subreddit} subreddit.</h1>`);
})

// localhost:8080/cats, but handles POST requests.  
app.post('cats', (req, res) => {
    res.send("Post request to /cats, this is different than a get request!");
})

// localhost:8080/cats  
app.get('/cats', (req, res) => {
    res.send("Meow!");
})

// localhost:8080/dogs  
app.get('/dogs', (req, res) => {
    res.send("Woof!");
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send("Nothing found!");
    }
    res.send(`<h1>Search results for:  ${q}</h1>`)
})

// I have to put this at the end, otherwise, other used routes will be ignored.  
// If route doesn't exist, this code will execute.   
app.get('*', (req, res) => {
    res.send(`I don't know that path!`);
})

// listen() binds and listens for connections on the specified host and port, in this case, port is 8080.  
app.listen(8080, () => {
    console.log("Listening on port 8080!");
})