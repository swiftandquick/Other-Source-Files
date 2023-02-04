fetch("https://swapi.dev/api/people/1/")
    .then(response => {
        // Note that response is a Promise object, not the json data that I wanted.  
        console.log("Resolved!", response);
        // json():  Take a Response stream and reads it to completion.    
        return response.json();
    })
    .then((data) => {
        // Then retrieve the json data and print it out.
        console.log("json done!", data);
        // I can make a second request to another API, return a promise.  
        return fetch("https://swapi.dev/api/people/2/");
    })
    .then((response) => {
        console.log("Second reques resolved");
        // Retrieve the json data using json() again.  
        return response.json();
    })
    .then((data) => {
        // Print out the retrieve json data, now for /people/2/. 
        console.log(data);
    })
    .catch(error => {
        console.log("Error!", error)
    });


const loadStarWarsPeople = async () => {
    try {
        /* Use await to pause the execution of code until the line of code return a resolve or reject object.  
            Same idea here, retrieve the Promise object, then retrieve the json data of that promise object, 
            then print out the data.  Use try-catch to catch an error in case the URL is not correct.  
        */
        const response = await fetch("https://swapi.dev/api/people/1/");
        const data = await response.json();
        console.log(data);
        const response2 = await fetch("https://swapi.dev/api/people/2/");
        const data2 = await response2.json();
        console.log(data2);
    }
    catch (error) {
        console.log("Error!", error);
    }
}

loadStarWarsPeople();