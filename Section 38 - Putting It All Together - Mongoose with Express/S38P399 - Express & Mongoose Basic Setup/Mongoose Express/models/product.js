// Require mongoose package.  
const mongoose = require('mongoose');

// Create a schema.  
// name is a String, must have a value.  
// price is a Number, must not have a negative value.  
// category is a String that is one of these:  ‘fruit’, ‘vegetable’, or ‘dairy’.  

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['fruit', 'vegetable', 'dairy']
    }
});

// Create a model based on schema and save it to the Product variable, the collection will be called products.  
const Product = mongoose.model('Product', productSchema);

// Export the Product variable (a model object) file as a module.  
module.exports = Product;