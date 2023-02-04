const password = prompt("Enter your password:");

// Password is only valid of length is at least 6 and does not contain space.  
if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("Valid password!");
}
else {
    console.log("Invalid password!");
}

const age = 90;

// If age between 0 and 5, or age > 65, print out "Free!".  
if ((age >= 0 && age < 5) || age > 65) {
    console.log("Free!");
}
else if (age >= 5 && age < 10) {
    console.log("$10.");
}
else if (age >= 10 && age < 65) {
    console.log("$20.");
}
else {
    console.log("Invalid age.");
}

let firstName = prompt("Enter your first name:");

// If I enter an invalid firstName value, which is an empty string, the prompt will ask me to try again.   
if (!firstName) {
    firstName = prompt("Try again!");
}

const age2 = 45;

// If age is not between 0 and 5 or age > 65, print out something.  
if (!((age2 >= 0 && age2 < 5) || age2 > 65)) {
    console.log("You are not a toddler or a senior.");
}