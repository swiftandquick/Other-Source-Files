// Define a function.  
function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

// Invoke the function.  A function can be invoked multiple times.  
singSong();
singSong();


// greet() takes two arguments.   
function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName}.`);
}

// Pass in the arguments into the greet() function.  
greet('George', 'Clooney');


// Repeat a string multiple times.  
function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}


// Takes in two arguments, return the sum.  
function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return 0;
    }
    else {
        return x + y;
    }
}