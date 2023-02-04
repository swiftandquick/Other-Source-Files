// Ask the user to put in a maximum number, then stores it.  
let maximum = parseInt(prompt("Enter the maximum number:  "));

// I need to enter a number, if I don't, then the prompt will keep asking for a valid number.  
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number:  "));
}

// targetNum is a number between 1 to maximum.  
const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess:  "));
let attempts = 1;

// Guess the number, prompt will tell if it's too high or too low, I can exit the loop if I guess it right.  
while (guess !== targetNum) {
    // I can also quit the game by inputting 'q'.  
    if (guess === 'q') {
        break;
    }
    // Increment the attempts value every time the loop iterates.  
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high, enter a new guess:  ");
    }
    else {
        guess = prompt("Too low, enter a new guess:  ");
    }
}

if (guess === 'q') {
    console.log("OK, you quit!  ");
}
else {
    console.log(`You got it!  The number is ${targetNum}.  It took ${attempts} guesses.  `);
}