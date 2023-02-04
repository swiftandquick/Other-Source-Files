const input = document.querySelector('input');
const h1 = document.querySelector('h1');

// Event triggers every time the value of input is modified.  
input.addEventListener('change', function (event) {
    console.log("The input is modified.");
});

input.addEventListener('input', function (event) {
    // Change h1's text equal to input value every time input changes.  
    h1.innerText = input.value;
    console.log("The input is changed.");
});