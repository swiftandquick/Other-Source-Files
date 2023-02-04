// Gets the sum of arguments.   
function sum(...nums) {
    return nums.reduce((total, el) => total + el);
}

console.log(sum(1, 2, 3));

// First argument is store in gold, second argument is store in silver, rest of the arguments is store in everyoneElse.  
function raceResults(gold, silver, ...everyoneElse) {
    console.log(`Gold medal goes to ${gold}.`);
    console.log(`Silver medal goes to ${silver}.`);
    console.log(`Thank ${everyoneElse} for participating.`);
}

console.log(raceResults('Tammy', 'Todd', 'Tina', 'Trevor', 'Travis'));