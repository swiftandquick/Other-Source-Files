const sing = async () => {
    // If a throw an error, promise is rejected.  
    // throw "Oh no, problem!";
    return "La la la la...";
}

/* Here, I called the sing() method, since in async function if I return without error, 
then the problem is resolved.  Now that the status is resolved, the .then() method is 
invoked, which prints out the data, a string variable returned from the sing() function.  
 */
sing().then((data) => {
    console.log("Promise resolved:  ", data);
});


const login = async (username, password) => {
    // If there is no username or password, throw an error.  
    if (!username || !password) {
        throw 'Missing Credentials';
    }
    // Resolve if password is 'corgifeetarecute'.  
    else if (password === 'corgifeetarecute') {
        return 'Welcome!'
    }
    // If password doesn't match, throw an error.  
    else {
        throw 'Invalid password.';
    }
}

login('akjsdhsa', 'corgifeetarecute')
    .then(msg => {
        console.log("Logged in!");
        console.log(msg);
    })
    .catch(error => {
        console.log("Error!");
        console.log(err);
    })



const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

/*
delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('indigo', 1000))
    .then(() => delayedColorChange('violet', 1000))
*/

// Async function for the code above.  
/* If I called rainbow(), the await keyword will halt the execution of the first 
    delayedColorChange() invocation, until the promise is fulfilled, JavaScript goes to 
    the next line of code.  This means the background will change color every second 
    for the first seven seconds.  
*/
async function rainbow() {
    await delayedColorChange('red', 1000);
    await delayedColorChange('orange', 1000);
    await delayedColorChange('yellow', 1000);
    await delayedColorChange('green', 1000);
    await delayedColorChange('blue', 1000);
    await delayedColorChange('indigo', 1000);
    await delayedColorChange('violet', 1000);
    // When all 7 promises are fulfilled, resolve the promise by returning a string.  
    return "All Done!";
}

async function printRainbow() {
    // Wait for rainbow() to resolve.  
    await rainbow();
    console.log("End of rainbow!");
}

printRainbow();


const fakeRequest = (url) => {
    // Create a new Promise object, which is also the return value, takes resolve and reject as arguments.  
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                // Return a string and invoke the function .catch().  
                reject('Connection Timeout :(');
            }
            else {
                // Return a string and invoke the function .then().  
                resolve(`Here is your fake data from ${url}`);
            }
        }, delay)
    })
}

async function makeTwoRequests() {
    try {
        // If fakeRequest is resolved, print the returned string.  
        let data1 = await fakeRequest('/page1');
        console.log(data1);
        let data2 = await fakeRequest('/page2');
        console.log(data2);
    }
    // If fakeRequest() returns reject because delay is over 5 seconds, catch the error.   
    catch (error) {
        console.log("Error, but it's OK.  ");
    }
}

makeTwoRequests();