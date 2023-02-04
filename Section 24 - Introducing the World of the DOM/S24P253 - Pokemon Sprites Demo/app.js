const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


for (let i = 1; i <= 905; i++) {

    // Create a <div> element.  
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');

    // Create a <span> element.  
    const label = document.createElement('span');
    label.innerText = `#${i}`;

    // Create an <img> element.  
    const newImg = document.createElement('img');
    // First link is 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    // Second link is 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
    // And so on...  
    newImg.src = `${baseURL}${i}.png`

    // Put each newImg (img) and label (span) into the pokemon (div).
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);

    // Put each pokemon (div) into <section> element with class of 'container'.  
    container.appendChild(pokemon)
}
