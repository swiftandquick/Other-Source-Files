const { render } = require('ejs');
const express = require('express');
const app = express();
const path = require('path');
// redditData is a huge object represents that data in the data.json file.  
const redditData = require('./data.json');

/* Tell Express that we want to use a directory called public to serve any images, CSS files, 
or scripts, and that directory will be the root directory of our application.  */
app.use(express.static(path.join(__dirname, '/public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// 'home' template is shown on home page.  
app.get('/', (req, res) => {
    res.render('home');
})

// 'cats' template is for 'localhost:3000/cats.  
app.get('/cats', (req, res) => {
    // Create the cats array and pass it as an argument, which we can then used in cats.ejs
    const cats = ['Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston']
    res.render('cats', { cats });
})

// 'subreddit' template is for 'localhost:3000/r/...', ... stands for anything after r/ and before another /.  
app.get('/r/:subreddit', (req, res) => {
    // Gets the params' value and save it as the variable subreddit.  
    const { subreddit } = req.params;
    /* Set data equals to a value inside redditData, for example, if subreddit is soccer, the value will
     be the soccer object that's inside data.json.  */
    const data = redditData[subreddit];
    /* If data is defined, like objects with keys of "soccer", "chicken", or "mightyharvest", pass in the 
    data (an If data is defined, like objects with keys of "soccer", "chicken", or "mightyharvest", pass 
    in the data (an object) as argument and render the page base on subreddit.ejs.  Notice how I put … 
    in front of data, because that way, I can use all properties inside the data object.  If data is not 
    define, means everything else, pass in subreddit as argument, and render the page base on notfound.ejs.object) 
    as argument and render the page base on subreddit.ejs.  If data is not define, means everything else, pass 
    in subreddit as argument, and render the page base on notfound.ejs.*/
    if (data) {
        res.render('subreddit', { ...data });
    }
    else {
        res.render('notfound', { subreddit })
    }
})

// 'random' template is shown on localhost:3000/rand.  
app.get('/rand', (req, res) => {
    // Generate a random number between 1 to 10.  
    const num = Math.floor(Math.random() * 10) + 1;
    // Pass the num variable as argument so I can use it in random.ejs.  
    res.render('random', { num });
})

app.listen(3000, () => {
    console.log("Listening on port 3000.");
})