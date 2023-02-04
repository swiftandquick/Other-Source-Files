const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const button = document.querySelector('button');

const changeColor = function () {
    // Returns an integer between 0 to 256, which are valid rgb arguments;
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    h1.innerText = `rgb(${r}, ${g}, ${b})`;
}

button.addEventListener('click', changeColor);