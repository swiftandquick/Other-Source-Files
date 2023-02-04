// Require the figlet and colors packages.  
const figlet = require("figlet");
const colors = require("colors");

// Print 'Hello World' in ASCII format and in rainbow color.  
figlet('Hello World!', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.rainbow)
});