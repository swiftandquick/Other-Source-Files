const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const letters = document.querySelectorAll('span');

for (let i = 0; i <= letters.length; i++) {
    letters[i].style.color = colors[i];
}