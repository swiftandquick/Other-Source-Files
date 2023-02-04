// I can define functions in an object, they're called methods.  
const myMath = {
    PI: Math.PI,
    square: function (num) {
        return num * num;
    },
    cube: function (num) {
        return num * num * num;
    }
}

// I can access variables and functions inside myMath object.  
console.log(myMath.PI);
console.log(myMath.square(2));
console.log(myMath.cube(2));


const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        // Use the this keyword to access to the object cat's name variable.  
        console.log(`${this.name} says meow.`);
    }
}

// This prints out of the cat's name.  
console.log(cat.meow());

const meow2 = cat.meow();
console.log(meow2);