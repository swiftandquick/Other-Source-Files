// Create a new XML http request.  
const req = new XMLHttpRequest();

// If the request is successful.  
req.onload = function () {
    console.log("It loaded!");
    /* Prints out the value of the responseText, which is a property of the current value.
        responseText is a string that has the key-value pairs in JSON format, I can parse 
        it using jsonParse() method and turn the responseText into an object.  
    */
    const data = JSON.parse(this.response);
    console.log(data);
    console.log(data.name, data.height);
}

// If the request fails.  
req.onerror = function () {
    console.log("Error!");
    console.log(this);
}

// The request is GET type, pass in URL as argument.  
req.open("GET", "https://swapi.dev/api/people/1/");
req.send();