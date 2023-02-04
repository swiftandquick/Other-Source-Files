// Require the 'fs' module'.  
const fs = require('fs');

/*
// Make the Dogs directory, inside the Dogs directory, there's a Corgis directory.  
fs.mkdir('Dogs/Corgis', { recursive: true }, (err) => {
    console.log("In the callback!")
    if (err) throw err;
});

// Create a Cats directory.
fs.mkdirSync('Cats');
console.log("I come after mkdir!");
*/

// folderName is the first argument (index 2), if argument is undefined, folder name is 'Project'
const folderName = process.argv[2] || 'Project'

try {
    // Create a folder with the name based on the argument pass in.  
    fs.mkdirSync(folderName);
    // Then, I create 3 files inside that folder.  The second argument in the method is the content that's written to the file.  
    fs.writeFileSync(`${folderName}/index.html`, '')
    fs.writeFileSync(`${folderName}/app.js`, '')
    fs.writeFileSync(`${folderName}/styles.css`, '')
}
catch (e) {
    console.log("SOMETHING WENT WRONG!!!");
    console.log(e);
}