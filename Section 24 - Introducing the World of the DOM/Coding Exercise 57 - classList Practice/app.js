const items = document.querySelectorAll('li');

for (let i = 0; i < items.length; i++) {
    if (items[i].classList.contains('highlight')) {
        items[i].classList.toggle('highlight');
    }
    else {
        items[i].classList.add('highlight');
    }
}