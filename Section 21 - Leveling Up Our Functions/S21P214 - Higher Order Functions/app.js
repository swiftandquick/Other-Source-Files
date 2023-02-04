// Takes a function as argument, invoke the same function twice.  
function callTwice(func) {
    func();
    func();
}

// Takes a function as argument, invoke the same function 10 times.  
function call10Times(func) {
    for (let i = 1; i <= 10; i++) {
        func();
    }
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

callTwice(rollDie);
call10Times(rollDie);


// A function can return a function.  
function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log("Congrats, I am a good function!");
            console.log("You win a million dollars!");
        }
    }
    else {
        return function () {
            console.log("This is a bad function!");
            console.log("You don't win anything!");
        }
    }
}

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

const isChild = makeBetweenFunc(0, 18);
console.log(`${isChild(9)}`);