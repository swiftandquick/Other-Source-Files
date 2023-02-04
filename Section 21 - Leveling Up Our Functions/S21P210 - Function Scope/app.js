let totalEggs = 0;

function collectEggs() {
    // Variables outside of the function can be used inside the function, the vice versa is not true.  
    totalEggs = 6;
}

// totalEggs is initially 0, but after calling the function, the variable's value is updated to 6.  
console.log(totalEggs);
collectEggs();
console.log(totalEggs);


let bird = 'Scarlet Macaw';
function birdWatch() {
    let bird = "Great Blue Heron";
    console.log(bird);
}
birdWatch();
console.log(bird);


// The code below will generate an error, because PI is a let variable defined in the if block, cannot be used outside of the block.  
/*
let radius = 8;
if (radius > 0) {
    const PI = MATH.PI;
}
console.log(PI);
*/


// msg is a var variable, which is usable outside of the block.  
for (let i = 0; i < 5; i++) {
    var msg = "ABC";
    console.log("In the block:  " + msg);
}
console.log("Outside of the block:  " + msg);


function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman'];
    function cryForHelp() {
        for (let hero of heroes) {
            console.log(`Please help us, ${hero}!`);
        }
    }
    cryForHelp();
}
bankRobbery();