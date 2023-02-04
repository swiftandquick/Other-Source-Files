// Cat and Dog are subclasses of the superclass Pet, both Cat and Dog classes inherit variables like name and age, as well as the eat() method.  
class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating.`;
    }
}

// Use the extends keyword to make Cat the subclass of Pet.  
// Cat has a unique method called meow().  
class Cat extends Pet {
    /* I use the super keyword to invoke the constructor in the Pet class, the superclass of Cat.  
        Besides inherit name and age from Pet class, I also add a unique variable called livesLeft 
        for Cat, which has the default value of 9.  
    */
    constructor(name, age, livesLeft = 9) {
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'Meow!';
    }
}

// Dog has a unique method called bark().  
class Dog extends Pet {
    bark() {
        return 'Woof!';
    }
    // Overwrites the superclass' eat() method, if a Dog object invokes eat(), execute this eat() method instead.  
    eat() {
        return `${this.name} scarfs their food!`;
    }
}