// Use destructuring to get the prop.  
// numSides has the default value of 6.  
// Generate a random number from 1 to numSides.  
export default function Die({numSides = 6}) {
    const roll = Math.floor(Math.random() * numSides) + 1;
    return <p>Die roll: {roll}</p>;
}