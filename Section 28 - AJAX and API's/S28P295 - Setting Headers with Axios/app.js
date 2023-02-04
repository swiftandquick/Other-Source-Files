// Gets the <ul> element with the id of "jokes".  
const jokes = document.querySelector("#jokes");
// Get the first <button> element.  
const button = document.querySelector("button");

const addNewJoke = async () => {
    // Retrieve the joke as a string value.  
    const jokeText = await getDadJoke();
    // Create a new <li> element.  
    const newLI = document.createElement("LI");
    newLI.append(jokeText);
    jokes.append(newLI);
};

const getDadJoke = async () => {
    try {
        // Create an object with the headers' key-value pair.  
        const config = { headers: { Accept: "application/json" } };
        // Pass in config as the second argument.  
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        console.log(res.data.joke);
        // Get the joke.  
        return res.data.joke;
    } catch (e) {
        return "NO JOKES AVAILABLE! SORRY :(";
    }
};

// Invoke addNewJoke() if I click on the button.  
button.addEventListener("click", addNewJoke);