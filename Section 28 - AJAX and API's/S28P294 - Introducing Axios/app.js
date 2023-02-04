// Use axios to get the API's Promise.  
axios.get("https://swapi.dev/api/people/1/")
    .then(response => {
        // Retrieve the response object once the initial request is resolved.  
        console.log("Response:  ", response);
    })
    .catch(error => {
        console.log("Error:  ", error);
    });


const getStarWarsPerson = async (id) => {
    try {
        // Retrieve the response object, await ensures that the Promise is resolved before moving onto the next line.  
        const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
        // response.data is the json data in string format.  
        console.log(response.data);
    }
    catch (error) {
        console.log("Error!", error);
    }
}

// Pass in the ID, the ID represents the person that I want to get the json data on.  
getStarWarsPerson(5);
getStarWarsPerson(10);