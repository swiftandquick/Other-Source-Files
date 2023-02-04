const nums = [1, 2, 3];

// Spread the array into individual arguments.  
console.log(Math.max(...nums));

const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

// Combine two arrays with spread, then add the element "Speedy".  
const allPets = [...cats, ...dogs, "Speedy"];

console.log(allPets);

// I can use spread to copy an object's properties into another object.  
const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };

/* Combine properties of two objects.  Since both feline and canine objects have the family property,  
 * the value will be overriden by the family property of canine object because canine is added in last.  
 * So the catDog object will have properties of:  legs: 4, family: 'Caninae', isFurry: true.  
 */
const catDog = { ...feline, ...canine };

console.log(catDog);

const dataFromForm = {
    email: 'bluemail@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}

// Copy dataFromForm's properties, then add two new properties.  
const newUser = { ...dataFromForm, id: 2345, isAdmin: false }

console.log(newUser);