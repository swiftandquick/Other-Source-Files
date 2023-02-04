// This code will print out "Hello." and "Goodbye!", then print out "Are you still there?" after 3 seconds.  
console.log("Hello.");
setTimeout(() => {
    console.log("Are you still there?");
}, 3000)
console.log("Goodbye!");

// Prints a random number between 0 and 1 every 2 seconds, create an ID for the interval.  
const id = setInterval(() => {
    console.log(Math.random());
}, 2000);

// Stop invoking setInteveral() by calling clearInterval(), pass in the ID as the argument, 
setTimeout(() => {
    clearInterval(id);
}, 10000)