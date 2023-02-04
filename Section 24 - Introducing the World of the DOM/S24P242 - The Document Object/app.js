// Retrieve all <img> elements and store them in an array.  
const allImages = document.getElementsByTagName('img');

// Change the src value of all images to something else.  
for (let img of allImages) {
    img.src = 'imgs/newChicken.bmp'
}

// Retrieve all elements with the class of 'square' and store them in an array.  
const squareImages = document.getElementsByClassName('square');

// Change the src value of elements with class of 'square' to something else.  
for (let img of squareImages) {
    img.src = 'imgs/newChicken.bmp';
}

// Select all anchor tags inside the paragraphs.  
const links = document.querySelectorAll('p a');

// Print out all the links.  
for (let link of links) {
    console.log(link.href);
}