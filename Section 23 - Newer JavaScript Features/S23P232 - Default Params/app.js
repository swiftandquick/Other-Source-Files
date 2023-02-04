function rollDie(numSides = 6) {
    // Return a random number between 1 to numSides.  
    return Math.floor(Math.random() * numSides) + 1;
}

// Set numSides = 20.  
console.log(rollDie(20));

// There's no argument, by default numSides = 6;
console.log(rollDie());

function greet(msg = "Hello there", person = "friend", punc = "!") {
    console.log(`${msg}, ${person}${punc}`);
}

greet();