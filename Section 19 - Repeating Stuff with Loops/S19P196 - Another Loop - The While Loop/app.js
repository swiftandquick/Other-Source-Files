let count = 0;

// While count is less than 10, keep iterating the loop.  This loop prints out 1 to 10.  
while (count < 10) {
    count++;
    console.log(count);
}

// The while loop asks us to guess SECRET's value, until I get it correct, it will keep asking.  
const SECRET = "BabyHippo";
let guess = prompt("Enter the secret code:  ");
while (guess !== SECRET) {
    guess = prompt("Enter the secret code:  ");
}

// The prompt will try to copy what I type in, until I type in "stop copying me".   
let input = prompt("Input:  ");
while (true) {
    input = prompt(input);
    if (input.toLowerCase() === "stop copying me") {
        // If the condition is met, use the break keyword to break out of the while loop.  
        break;
    }
}
console.log("OK, you win!");

// Even though this loop supposes to iterate 1000 times, if i is at 100, it will break out of the loop.  
for (let i = 0; i < 1000; i++) {
    console.log(i);
    if (i === 100) {
        break;
    }
}