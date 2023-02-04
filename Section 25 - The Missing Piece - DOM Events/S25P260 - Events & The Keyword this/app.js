const newColor = function () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

/* Here, I want to add styles to both <h1> elements and <button> elements on click.  
 * So I created a function called colorize(), with the “this” keyword in it.  So if I 
 * click on a <h1> element, the “this” keyword represents the current <h1> element 
 * that’s being click on, and will add styles to the <h1> element.  
 */
function colorize() {
    this.style.backgroundColor = newColor();
    this.style.color = newColor();
}

const buttons = document.querySelectorAll('button');
for (let button of buttons) {
    button.addEventListener('click', colorize);
}

const h1s = document.querySelectorAll('h1');
for (let h1 of h1s) {
    h1.addEventListener('click', colorize);
}