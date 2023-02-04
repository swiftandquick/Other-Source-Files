document.querySelector('button').addEventListener('click', function (event) {
    console.log(event);
});

const input = document.querySelector('input');

input.addEventListener('keydown', function (event) {
    console.log("KEYDOWN");
    console.log(event); // Returns KeyboardEvent object.  
    console.log(event.key); // Returns the object's key value.  
    console.log(event.code); // Returns the object's code value.  
    // Print out strings in the console based on arrow key pressed.   
    switch (event.code) {
        case 'ArrowUp':
            console.log("Up!");
            break;
        case 'ArrowDown':
            console.log("Down!");
            break;
        case 'ArrowLeft':
            console.log("Left!");
            break;
        case 'ArrowRight':
            console.log("Right!");
            break;
        default:
            console.log("Ignored!");
    }
});

input.addEventListener('keyup', function () {
    console.log("KEYUP");
});