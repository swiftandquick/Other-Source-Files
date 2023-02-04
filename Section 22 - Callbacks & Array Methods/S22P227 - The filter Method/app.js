const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Only keeps the element 4.  
const four = numbers.filter(n => {
    return n === 4;
})

console.log(four);

// Only keeps the elements less than 10.  
const smallNums = numbers.filter(n => {
    return n < 10;
})

console.log(smallNums);

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All the Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'ParaNotting Hillsite',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

// Create a new array that only keep objects with score over 80.  
const goodMovies = movies.filter(movie => {
    return movie.score > 80;
});

console.log(goodMovies);

// Use map() function to create an array of string based on titles of goodMovies array.  
const goodTitles = goodMovies.map(movie => movie.title);

console.log(goodTitles);

// I can merge filter() and map() function into an one liner. 
const goodTitles2 = movies.filter(movie => movie.score > 80).map(movie => movie.title);

console.log(goodTitles2);

// badMovies keep objects with score below 70.  
const badMovies = movies.filter(movie => movie.score < 70);

console.log(badMovies);

// recentMovies keep objects with year above 2000.  
const recentMovies = movies.filter(movie => movie.year > 2000);

console.log(recentMovies);