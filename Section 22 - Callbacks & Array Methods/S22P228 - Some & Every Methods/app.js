const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77];

// Checks if every exams element is above or equal to 75, return true.  
console.log(exams.every(score => score >= 75));

// Checks if every exams element is above or equal to 80, return false.  
console.log(exams.every(score => score >= 80));

// Checks if some exams elements are above or equal to 90, return true.  
console.log(exams.some(scores => scores >= 90));

// Checks if any exams elements are score at 100, return false.  
console.log(exams.some(scores => scores === 100));

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

// Check if there are any movies created after 2015, return true.  
console.log(movies.some(movie => movie.year > 2015));