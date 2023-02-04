const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];
const [gold, silver, bronze, ...everyoneElse] = scores;

console.log(gold); // 929321
console.log(silver); // 899341
console.log(bronze); // 888336
console.log(everyoneElse); // [772739, 543671, 243567, 111934];


const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: "Harvey Bernard Milk was an American politician and the first openly gay senator.",
    city: 'San Francisco',
    state: 'California'
}

// Create 5 variables based on user object's properties.  
const { email, firstName, lastName, city, bio } = user;

console.log(email);
console.log(firstName);
console.log(lastName);
console.log(city);
console.log(bio);

// I can also name the variable to someone else other than key's names.  
const { born: birthYear, died: deathYear } = user;

console.log(birthYear);
console.log(deathYear);

// Pass in user object as the argument, only takes firstName and lastName properties, return a full name.  
function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}

console.log(fullName(user));

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

// Use destructure to filter base on the score of each object.  
console.log(movies.filter(({ score }) => score >= 90));

// Use destructure to create an array of movie descriptions base on each movies object's properties.  
const movieDescriptions = movies.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}.`
});

console.log(movies2);