// Regular arrow function.  
const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
}

console.log(rollDie());

// Implicit return.  
const rollDie2 = () => (
    Math.floor(Math.random() * 6) + 1
);

console.log(rollDie2());

// Implict return function that returns sum of two numbers, one liner version.  
const add = (a, b) => a + b;

console.log(add(1, 2));
