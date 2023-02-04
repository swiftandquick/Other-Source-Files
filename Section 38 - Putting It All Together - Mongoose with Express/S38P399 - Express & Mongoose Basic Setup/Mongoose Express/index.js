// Require express package.  
const express = require('express');
const app = express();

// Require path from Node.  
const path = require('path');

// Require the mongoose package.  
const mongoose = require('mongoose');

// Require the method-override package.  
const methodOverride = require('method-override');

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

// Set the views to the views folder.  
app.set('views', path.join(__dirname, 'views'));

// Set view engine to ejs.  
app.set('view engine', 'ejs');

// Use the express.urlencoded() as a middleware function to parse incoming requests with urlencoded payloads.   
app.use(express.urlencoded({ extended: true }));

// '_method' is the string we are looking for in the query string.  
app.use(methodOverride('_method'));

// Create a categories array that contains all options of the category property in products collection.  
const categories = ['fruit', 'vegetable', 'dairy'];

// localhost:3000/products will render the template index.ejs from products folder, which is inside views folder.  
app.get('/products', async (req, res) => {
    // Retrieve the query, which is after ?category= in the link after I click on the anchor tag that contains the category item.  
    const { category } = req.query;
    // If the category has a value, find all products of the same category and render the page using index.ejs, which will show all objects of the same category.  
    if (category) {
        const products = await Product.find({ category });
        res.render('products/index', { products, category });
    }
    // If the category doesn't have a value, find all products regardless of category value, render the page using index.ejs, which will show all objects.  
    else {
        const products = await Product.find({});
        res.render('products/index', { products, category: 'All' });
    }
});

// localhost:3000/products/new will render the template new.ejs from products folder, which is inside views folder.  
// I must put this method after get() method for ‘/products’ and before get() method for ‘/products/:id’, or the web app doesn’t run.  Order matters.  
// Pass in categories as the second argument for new.ejs.  
app.get('/products/new', (req, res) => {
    res.render('products/new', { categories });
});

// When the form in new.ejs is submitted, there will be a POST request to localhost:3000/products.  
app.post('/products', (req, res) => {
    // req.body is the object we made with the form in new.ejs, create a Product object based on the returned object from the submitted form in new.ejs.  
    const newProduct = new Product(req.body);
    // Insert the new object into the products collection.  An ID is automatically generated when the document is inserted into the collection.  
    newProduct.save();
    // Redirect to the localhost:3000/products/:id after form on new.ejs is submitted, where id is the id of the newly created object.  
    res.redirect(`/products/${newProduct._id}`)
})

// localhost:3000/products/:id will render the template show.ejs from products folder, which is inside views folder.  
app.get('/products/:id', async (req, res) => {
    // Set the id equals to the parameter.  
    const { id } = req.params;
    // Find the object by its id via findById() method.  
    const product = await Product.findById(id);
    // Pass product as second argument, so I can use its properties to retrieve its value.  
    res.render('products/show', { product });
});

// localhost:3000/products/:id/edit will render the template edit.ejs from products folder, which is inside views folder.  
app.get('/products/:id/edit', async (req, res) => {
    // Set the id equals to the parameter.  
    const { id } = req.params;
    // Retrieve the object by its ID, then use it as the second argument.  
    const product = await Product.findById(id);
    // Pass in categories array to be used in edit.ejs.  
    res.render('products/edit', { product, categories });
});

// If a form on edit.ejs is submitted, this PUT request to localhost:3000/products/:id will be invoked.  
app.put('/products/:id', async (req, res) => {
    // Set the id equals to the parameter.  
    const { id } = req.params;
    // Find the object by its ID, and update it to the value of the returned object after the form on edit.ejs is submitted.  
    // JavaScript also validates the newly created object with schema to check if each property have a valid value before update.  
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    // Redirect to the localhost:3000/products/:id after form on edit.ejs is submitted, where id is the id of the updated object.  
    res.redirect(`/products/${product._id}`);
});

// If the form on show.ejs is submitted, this DELETE request to localhost:3000/products/:id will be invoked.  
app.delete('/products/:id', async (req, res) => {
    // Set the id equals to the parameter.  
    const { id } = req.params;
    // Find and delete the object by its ID.  
    const deletedProduct = await Product.findByIdAndDelete(id);
    // Redirect to localhost:3000/products after the form is deleted.  
    res.redirect('/products');
});

// Listen on port 3000.  
app.listen(3000, () => {
    console.log("Listening on port 3000!");
});