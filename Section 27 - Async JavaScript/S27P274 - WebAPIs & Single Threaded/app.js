console.log("Sending request to server!"); // This prints first.  

setTimeout(() => {
    console.log("Here is your data from the server..."); // This prints last.  
}, 3000);

console.log("I am at the end of the file!"); // This prints second.  