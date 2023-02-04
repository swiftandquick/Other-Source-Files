// Require the mongoose package.  
const mongoose = require('mongoose');

// Connect to the database shopApp.  
mongoose.connect('mongodb://127.0.0.1:27017/personApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection open!");
    })
    .catch(error => {
        console.log("Error!");
        console.log(error);
    });

// Create a Schema, there are two properties, first and last, both are String type.  
const personSchema = new mongoose.Schema({
    first: String,
    last: String
});

// Use a getter to retrieve both first and last's values.  
personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`;
});

// Update first and last name before the save() method.  
personSchema.pre('save', async function () {
    this.first = 'Yo';
    this.last = 'Mama';
    console.log("About to save!");
});

personSchema.post('save', async function () {
    console.log("Just saved!");
});

// Create a model.  
const Person = mongoose.model('Person', personSchema);
