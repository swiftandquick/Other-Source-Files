// If 1 + 1 = 2, execute the codes inside the block.  In this case, 1 + 1 = 2 is true, console will print out the string.  
if (1 + 1 === 2) {
    console.log("Math still works!");
}

// Since 1 + 2 = 3, not 2, console will not print out the line.  
if (1 + 2 === 2) {
    console.log("Math still works!");
}

// Create a number, assign it a random value from 0 to 1.  
let random = Math.random();

// If random's value is less than 0.5, print out the string inside the if block.  .  
if (random < 0.5) {
    console.log("Your number is less than 0.5!");
}
// If number is not less than 0.5, then print out the string inside the else block.  
else {
    console.log("Your number is greater than 0.5!");
}
console.log(random);

const dayOfWeek = prompt("Enter a day:  ").toLowerCase();

/** If dayOfWeek's value is "monday", console prints out "Ugh, I hate Mondays!".  If the first statement is false, it will go to the next 
 * else if block and check if the argument is true, in this case, if dayOfWeek is "saturday", console prints out "Yay, I love Saturdays!".  
 * If first else if statement is false, it will go to the second else if block and check if the statement is, if dayOfWeek's value is "friday", 
 * console prints out "Fridays are decent, especially after work!".  If nothing is true, execute the codes inside the else block, which 
 * prints out "Meh!".
 */
if (dayOfWeek === 'monday') {
    console.log("Ugh, I hate Mondays!");
}
else if (dayOfWeek === 'saturday') {
    console.log("Yay, I love Saturdays");
}
else if (dayOfWeek === "friday") {
    console.log("Fridays are decent, especially after work!");
}
else {
    console.log("Meh!");
}

const age = 89;

if (age < 5) {
    console.log("You are a toddler.  You get in for free.");
}
else if (age < 10) {
    console.log("You are a child.  You pay $10.");
}
else if (age < 65) {
    console.log("You are an adult.  You pay $20.");
}
else {
    console.log("You are a senior.  You pay $10.");
}

/** Password needs to be 6+ characters and cannot include space.  */
const password = prompt("Please enter a new password:  ");

// Check if length of password is at least 6.  
if (password.length >= 6) {
    // If password has valid length, check if password contain spaces in nested conditionals.  
    if (password.indexOf(' ') === -1) {
        console.log("Valid password!");
    }
    else {
        console.log("Password cannot contain spaces!");
    }
}
else {
    console.log("Password too short!  Must be 6+ characters.");
}