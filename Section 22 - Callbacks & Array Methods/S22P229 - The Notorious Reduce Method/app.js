const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// The reduce() method will invoke 4 times to sum all elements of the array.  
const total = prices.reduce((total, price) => total + price);

console.log(total);

// Use the reduce() method to find the minimum value of the array.  
const min = prices.reduce((min, price) => {
    if (price < min) {
        return price; // Return price as the new min value.  
    }
    else {
        return min;
    }
});

console.log(min);

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

// Use reduce() to get the highest rated movie.  
const bestMovie = movies.reduce((bestMovie, currentMovie) => {
    if (currentMovie.score > bestMovie.score) {
        return currentMovie;
    }
    else {
        return bestMovie;
    }
});

console.log(bestMovie.title);

const evens = [2, 4, 6, 8];
console.log(evens.reduce((sum, num) => sum + num, 100));