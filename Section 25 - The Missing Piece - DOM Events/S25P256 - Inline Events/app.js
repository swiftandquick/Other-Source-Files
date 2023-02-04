// Create a btn variable to store the element with ID of "v2".  
const btn = document.querySelector('#v2');

btn.onclick = function () {
    alert('You clicked me!');
    alert('Stop clicking!');
}

function scream() {
    console.log("Aaaaaaaahhhhh!");
    console.log("Stop touching me!");
}

// Invokes scream() when I hover the mouse over the element.  
btn.onmouseenter = scream;

// I can also create events on elements that are usually not meant to be click on, such as <h1>.  
document.querySelector('h1').onclick = () => {
    alert("You clicked on me");
    alert('Stop clicking!');
}

const btn3 = document.querySelector('#v3');

// When the button is clicked, alert twice.  
btn3.addEventListener('click', () => {
    alert("You clicked on me.");
    alert('Stop clicking!');
});

// After the button is clicked, print out some text on the terminal.  
btn3.addEventListener('mouseup', () => {
    console.log("What's up, you clicked on me!");
});

function twist() {
    console.log("Twist!");
}

function shout() {
    console.log("Shout!");
}

const tasButton = document.querySelector('#tas');

// Overwrites the original onclick value, now the console prints "Shout!" after the fourth button is clicked.  
/*
tasButton.onclick = twist;
tasButton.onclick = shout;
*/

// However, I can add multiple events with addEventListener, now both twist() and shout() are invoked on click.  
tasButton.addEventListener('click', twist);
tasButton.addEventListener('click', shout);

function tas() {
    alert("You clicked on me.");
}
tasButton.addEventListener('click', tas, { once: true });
