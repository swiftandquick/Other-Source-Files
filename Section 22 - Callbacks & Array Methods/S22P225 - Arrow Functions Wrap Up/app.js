const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
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

// Create a new string that contains each element's title and score.  
const newMovies = movies.map(function (movie) {
    return `${movie.title} - ${movie.score / 100}`;
});

console.log(newMovies);

// Same exact function as above, but use implict return instead.  
const newMovies2 = movies.map(movie => `${movie.title} - ${movie.score / 100}`);

console.log(newMovies);