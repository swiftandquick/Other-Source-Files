const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Use forEach to invoke an unnamed function to print out even numbers in numbers array.  
numbers.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el);
    }
});

// Use map() to double every array element's value, then store each new value in the doubles array.  
const doubles = numbers.map(function (num) {
    return num * 2;
});

console.log(doubles);


const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand by Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

// Use forEach to print out the titles and scores in the movies array.  
// There are 4 "movie" objects inside the movies array, I can retrieve the value of title by calling movie.title.  
movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`);
});

// Create an array, titles, that stores movie titles in uppercase.  
const titles = movies.map(function (movie) {
    return movie.title.toUpperCase();
});

console.log(titles);


// This is an arrow function, an easier way to write an unnamed function.  
const add = (x, y) => {
    return x + y;
}

console.log(add(4, 5));


// Another arrow function that squares a number.  
const square = (x) => {
    return x * x;
}

console.log(2);


// An arrow function can have no argument.  
const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
}

console.log(rollDie());