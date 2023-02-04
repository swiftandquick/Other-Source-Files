const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners'];

// This is a for loop.  
for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`);
}

// This is a for of loop.  
for (let sub of subreddits) {
    console.log(`Visit reddit.com/r/${sub}`);
}

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

// This if for loop.  
for (let i = 0; i < seatingChart.length; i++) {
    for (let j = 0; j < seatingChart[i].length; j++) {
        console.log(seatingChart[i][j]);
    }
}

// This is the for of loop version.  
for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}

// Use for of loop to print out each character in a string.  
for (let char of "hello world") {
    console.log(char);
}

// Coding Exercise 34:  For ... of Practice

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let num of numbers) {
    console.log(`${num * num}`);
}