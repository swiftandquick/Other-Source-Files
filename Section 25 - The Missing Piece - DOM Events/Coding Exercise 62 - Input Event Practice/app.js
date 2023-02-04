const h1 = document.querySelector('h1');
const username = document.querySelector('#username');

username.addEventListener('input', function (event) {
    h1.innerText = `Welcome, ${username.value}`;
    if (username.value == "") {
        h1.innerText = "Enter Your Username";
    }
});