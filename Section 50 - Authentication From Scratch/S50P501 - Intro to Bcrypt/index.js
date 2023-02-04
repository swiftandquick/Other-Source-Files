// Require bcrypt.  
const bcrypt = require('bcrypt');

// Generate a salt with bcrypt, saltRounds is 10.  
// Hash the pw variable, which is 'monkey', add the salt.  
/*
const hashPassword = async (pw) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(pw, salt);
    console.log(salt);
    console.log(hash);
}
*/

// I can determine the salt's value to be 12 in the hash() method.  
const hashPassword = async (pw) => {
    const hash = await bcrypt.hash(pw, 12);
    console.log(hash);
}

// Compare the password (pw) and hashed password (hashedPw), if it is equal, print out "Logged you in!".  
const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);
    if (result) {
        console.log("Logged you in!");
    }
    else {
        console.log("Incorrect password!");
    }
}

// hashPassword('monkey');

// login("monkey", "$2b$10$VeFEXwdjyyez0ujAXX8nme/RRb2PQKKJDhgnTZJ0PsPRvAxVh0K4C");