const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            // Call resolved() if rand is less than 0.7.   
            if (rand < 0.7) {
                resolve('Your fake data here.');
            }
            // Otherwise, call reject().  
            else {
                reject('Request error!');
            }
        }, 1000);
    });
}

fakeRequest('/dogs/1')
    // If resolve() is called, .then() will be invoked.  
    .then((data) => {
        console.log("Done with request!");
        console.log('data is:  ', data);
    })
    .catch((err) => {
        // If reject() is called, .then() will be invoked.  
        console.log("Oh no!  ", err);
    });

// Use Promise to change color of the page every 1 second.  
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('indigo', 1000))
    .then(() => delayedColorChange('violet', 1000))