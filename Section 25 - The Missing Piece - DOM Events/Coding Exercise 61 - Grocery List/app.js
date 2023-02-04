const form = document.querySelector('form');
const product = document.querySelector('#product');
const qty = document.querySelector('#qty');
const list = document.querySelector('#list');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const item = `${qty.value} ${product.value}`;
    const newLi = document.createElement('li');
    newLi.innerText = item;
    list.appendChild(newLi);
    product.value = "";
    qty.value = "";
});