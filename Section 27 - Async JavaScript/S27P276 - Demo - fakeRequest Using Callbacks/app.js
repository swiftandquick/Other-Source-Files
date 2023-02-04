// THE CALLBACK VERSION
// Takes URL (text), success (function), and failure (function) as argument.  
const fakeRequestCallback = (url, success, failure) => {
    // Generate a number between 500 to 5000.  
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        // If delay is more than 4 seconds, time out.  Call the failure callback, return a string.   
        if (delay > 4000) {
            failure('Connection Timeout :(');
        }
        // Otherwise, print out the URL.  Call the success callback, return a string.  
        else {
            success(`Here is your fake data from ${url}`);
        }
    }, delay)
}

// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
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

/*
fakeRequestCallback('books.com/page1',
    // success
    function (response) {
        console.log("IT WORKED!!!!");
        // Print out the returned string.
        console.log(response);
        // Submit a second request.
        fakeRequestCallback('books.com/page2',
            // success
            function (response) {
                console.log("IT WORKED AGAIN!!!!");
                console.log(response);
                fakeRequestCallback('books.com/page3',
                    // success
                    function (response) {
                        console.log("IT WORKED AGAIN (3rd req)!!!!");
                        console.log(response);
                    },
                    // failure
                    function (err) {
                        console.log("ERROR (3rd req)!!!", err);
                    })
            },
            // failure
            function (err) {
                console.log("ERROR (2nd req)!!!", err);
            })
    },
    // failure, if it fails to retrieve link after 4+ seconds, we don't call the fakeRequestCallback() function again.
    function (err) {
        console.log("ERROR!!!", err)
    })
*/

/*
fakeRequestPromise('yelp.com/api/coffee/page1')
    // If resolve() is returned.
    .then(() => {
        console.log("IT WORKED!!!!!! (page1)");
        // Invoke fakeRequestPromise again.
        fakeRequestPromise('yelp.com/api/coffee/page2')
            .then(() => {
                console.log("IT WORKED!!!!!! (page2)");
                fakeRequestPromise('yelp.com/api/coffee/page3')
                    .then(() => {
                        console.log("IT WORKED!!!!!! (page3)");
                    })
                    .catch(() => {
                        console.log("OH NO, ERROR!!! (page3)");
                    })
            })
            .catch(() => {
                console.log("OH NO, ERROR!!! (page2)");
            })
    })
    // If reject() is returned.
    .catch(() => {
        console.log("OH NO, ERROR!!! (page1)");
    })
*/

// THE CLEANEST OPTION WITH THEN/CATCH
// RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!

fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log("IT WORKED!!!!!! (page1)");
        // Print out the returned string from fakeRequestPromise() function.  
        console.log(data);
        // Retrieve the Promise object by invoking fakeRequestPromise() again, then use the return keyword to 
        // return the retrieved Promise object to the unnamed function linked to the first .then() method. 
        // Then, use the new Promise object to invoke the second .then() method.  
        return fakeRequestPromise('yelp.com/api/coffee/page2');
    })
    .then((data) => {
        console.log("IT WORKED!!!!!! (page2)");
        console.log(data);
        return fakeRequestPromise('yelp.com/api/coffee/page3');
    })
    .then((data) => {
        console.log("IT WORKED!!!!!! (page3)");
        console.log(data);
    })
    .catch((err) => {
        // Regardless whether the first, second, or third time the link we fail to retrieve the link, .catch() 
        // will be invoked.  
        console.log("OH NO, A REQUEST FAILED!!!");
        console.log(err);
    });
