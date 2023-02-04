// Prints out numbers from 1 to 10.  
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Prints out even numbers from 2 to 20.  
for (let i = 2; i <= 20; i = i + 2) {
    console.log(i);
}

// Prints out 100, 90, 80, ..., 0.  
for (let i = 100; i >= 0; i = i - 10) {
    console.log(i);
}

// Prints out 10, 100, 1000.  
for (let i = 10; i <= 1000; i = i * 10) {
    console.log(i);
}

// This is an infinite loop, i will never go below 0.  
/* 
for (let i = 20; i >= 0; i++) {
    console.log(i);
}
*/

const animals = ["cat", "dog", "rabbit"];

// Print out every item in the animals array. 
for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}

// Print out every item in the animals array in reverse order.  
for (let i = animals.length - 1; i >= 0; i--) {
    console.log(i, animals[i]);
}

// This is a nested loop, every time outer loop runs, the inner for loop runs 3 times.  
for (let i = 1; i <= 10; i++) {
    console.log(`i is:  ${i}`);
    for (let j = 1; j < 4; j++) {
        console.log(`j is:  ${j}`);
    }
}

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

// Print out every element in the nested array seatingChart.  
for (let i = 0; i < seatingChart.length; i++) {
    console.log(`ROW ${i + 1}`);
    for (let j = 0; j < seatingChart[i].length; j++) {
        console.log(seatingChart[i][j]);
    }
}