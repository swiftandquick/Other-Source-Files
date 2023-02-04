// Require mongoose.  
const mongoose = require('mongoose');

// Require bcrypt.  
const bcrypt = require('bcrypt');

// Create a schema for user.  
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username cannot be blank.']
    },
    password: {
        type: String,
        required: [true, 'Password cannot be blank.']
    }
})

// Define a function findAndValidate, which exists directly on the model.  
userSchema.statics.findAndValidate = async function (username, password) {
    // this refers to userSchema's model User, find an object with the username.  
    const foundUser = await this.findOne({ username });
    // Compare the password (password) to hashed password (foundUser.password), return true if they match, otherwise return false.  
    const isValid = await bcrypt.compare(password, foundUser.password);
    // If isValid is true, return foundUser object, otherwise return false.  
    return isValid ? foundUser : false;
}

// Define a pre method before save() is invoked, I use this method to hash the password before saving it.  
userSchema.pre('save', async function (next) {
    // Check if the User's password property is not modified, call next() if password is not modified. 
    if (!this.isModified('password')) {
        next();
    }
    // Re-hash the password if password had been modified.  
    else {
        // this refers to the current User object, this.password is the User object's password.  
        // Hash the User object's password and save it as the new password value.  
        // 12 is the saltRounds, I add the salt before hashing.  
        this.password = await bcrypt.hash(this.password, 12);
        next();
    }
});

// Create a model using userSchema then export the model.  
module.exports = mongoose.model('User', userSchema);