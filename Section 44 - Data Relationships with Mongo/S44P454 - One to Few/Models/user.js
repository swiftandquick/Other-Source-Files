// Require the mongoose package.  
const mongoose = require('mongoose');

// Connect to the database relationshipDemo.  
mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection open!");
    })
    .catch(error => {
        console.log("Error!");
        console.log(error);
    });

// Set the Schema, each object has an addresses property where it stores multiple objects with each object represent an address.  
const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [{
        street: String,
        city: String,
        state: String,
        country: {
            type: String,
            required: true
        }
    }]
});

// Create a model object User using userSchema.  
const User = mongoose.model('User', userSchema);

// makeUser is a function that creates a User object.  
const makeUser = async () => {
    const u = new User({
        first: 'Harry',
        last: 'Potter'
    })
    // Use push() to add an element on the addresses array.  
    u.addresses.push({
        street: '123 Sesame St.',
        city: 'New York',
        state: 'NY',
        country: 'USA'
    });
    const res = await u.save();
    console.log(res);
}

// addAddress is a function that finds the object by its ID, then add an object at the end of the addresses array.    
const addAddress = async (id) => {
    const user = await User.findById(id);
    user.addresses.push({
        street: '99 3rd St.',
        city: 'New York',
        state: 'NY',
        country: 'USA'
    });
    const res = await user.save();
    console.log(res);
}

// Call the makeUser() function.
// makeUser();

// Call the addAddress() function, pass in the ID of the object I previously create via makeUser() function.
// addAddress('63c8ba981f058bee76761961');