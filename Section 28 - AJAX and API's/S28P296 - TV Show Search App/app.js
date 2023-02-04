// Get the form.  
const form = document.querySelector('#searchForm');

// Create an event on submit, which means event occurs after I click the button.  
form.addEventListener('submit', async function (event) {
    // Prevent default so I don't get send to another page upon submitted the form.  
    event.preventDefault();
    // Gets the value inside the text inside the input, which is in form, elements, query, value.  
    const searchTerm = form.elements.query.value;
    const config = {
        params: {
            // q is a key, value is the searchTerm variable.  
            q: searchTerm
        },
    };
    // Use axios.get() to retrieve a Response object from the URL.  
    const response = await axios.get(`http://api.tvmaze.com/search/shows?`, config);
    // Pass in the Response object's data attribute (an array of objects represent the shows in search result) as an argument.  
    makeImages(response.data);
    // Empty the input.  
    form.elements.query.value = '';
});

const makeImages = (shows) => {
    for (let result of shows) {
        // If there is an image.  
        if (result.show.image) {
            // Create an image element.  
            const img = document.createElement('img');
            // Set the src's value to the image link.  
            img.src = result.show.image.medium;
            // Append the element to the body.  
            document.body.append(img);
        }
    }
}