// Require the mongoose package.  
const mongoose = require('mongoose');

// Require the Product variable from product.js, which is in models folder.  
const Product = require('./models/product');

// Connect to the database farmStand.  
mongoose.connect('mongodb://127.0.0.1:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection open!");
    })
    .catch(error => {
        console.log("Error!");
        console.log(error);
    });

/*
// Create a new Product object.  
const p = new Product({
    name: 'Ruby Grapefruit',
    price: 1.99,
    category: 'fruit'
})

// Insert the object as a document.  
p.save()
    .then(p => {
        console.log(p);
    })
    .catch(e => {
        console.log(e);
    });
*/

/*
// Create an array of 5 objects.  
const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddess Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Whole Milk',
        price: 2.69,
        category: 'dairy'
    },
];

// Use the insertMany() method to insert objects within the seedProducts array.  
Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    });
*/