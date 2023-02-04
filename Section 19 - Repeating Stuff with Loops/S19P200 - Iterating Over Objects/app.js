const testScores = {
    keenan: 80,
    damon: 67,
    kim: 80,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

// Use for ... in to iterate over an object.  
for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}.`);
}

total = 0;
let scores = Object.values(testScores)

// Object.values(testScore) gets all values of testScores, this prints out all scores.  
for (let score of scores) {
    console.log(score);
    total += score;
}

console.log(total);
console.log(total / scores.length);