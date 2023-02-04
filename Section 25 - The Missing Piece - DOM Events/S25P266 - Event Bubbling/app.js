const button = document.querySelector('button');
const button2 = document.querySelector('#changeColor');
const container = document.querySelector('#container');

button.addEventListener('click', function (event) {
    event.stopPropagation();
});

button2.addEventListener('click', function (event) {
    container.style.backgroundColor = makeRandomColor();
    /* Because <button> is inside <div>, if <button> is clicked, it will also hide the text.
     * Use the stopPropagation() method to stop the entire <div> from disappearing after 
     * clicking on <button> element.  
     */
    event.stopPropagation();
});

container.addEventListener('click', function () {
    container.classList.toggle('hide');
});

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}