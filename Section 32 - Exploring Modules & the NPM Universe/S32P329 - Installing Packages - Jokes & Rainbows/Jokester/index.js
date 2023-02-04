const jokes = require("give-me-a-joke");

// Get a random dad joke using the function getRandomDadJoke() from give-me-a-joke package.  
jokes.getRandomDadJoke(function (joke) {
    console.log(joke);
});