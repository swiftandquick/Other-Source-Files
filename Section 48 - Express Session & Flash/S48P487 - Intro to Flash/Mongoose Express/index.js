// Require express package.  
const express = require('express');
const app = express();

// Require path from Node.  
const path = require('path');

// Require the mongoose package.  
const mongoose = require('mongoose');

// Require the method-override package.  
const methodOverride = require('method-override');

// Require AppError object from AppError.js.  
const AppError = require('./AppError');

// Require the Product variable from product.js, which is in models folder.  
const Product = require('./models/product');

// Require the Farm variable from farm.js, which is in the models folder.  
const Farm = require('./models/farm');

// Connect to the database flashDemo.  
mongoose.connect('mongodb://127.0.0.1:27017/flashDemo', { useNewUrlParser: true, useUnifiedTopology: true })
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

// Define the wrapAsync function, if anything wrong with the functions that are wrapped inside wrapAsync function, catch the error and invoke error handler.  
function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(e => next(e));
    }
}


// Farm routes.  

// localhost:3000/farms will render the template index.ejs, which is inside the farms folder.  
// Pass in farms (array of Farm objects) as an argument where I can use the properties of objects in farms array.  
app.get('/farms', wrapAsync(async (req, res) => {
    const farms = await Farm.find({});
    res.render('farms/index', { farms });
}));

// localhost:3000/farms/new will render the template new.ejs, which is inside the farms folder.  
app.get('/farms/new', (req, res) => {
    res.render('farms/new');
})

// When the form from localhost:3000/farms/new is submitted, a POST request will send to localhost:3000/farms.  
// Add the newly created Farm object from the submitted form to the farms collection.  
// Redirect the web page to localhost:3000/farms.  
app.post('/farms', wrapAsync(async (req, res) => {
    const farm = new Farm(req.body);
    await farm.save();
    res.redirect('/farms');
}));

// localhost:3000/farms/:id renders show.ejs, which is in the farms folder.  
// Find the Farm object by id then pass in that object as argument in the render() method, so I can use that the farm object's properties in show.ejs.  
app.get('/farms/:id', wrapAsync(async (req, res) => {
    const farm = await Farm.findById(req.params.id).populate('products');
    res.render('farms/show', { farm });
}));

// When a form on localhost:3000/farms/:id is submitted, delete request on localhost:3000/farms/:id will be invoked, redirect to localhost:3000/farms.   
app.delete('/farms/:id', wrapAsync(async (req, res) => {
    const farm = await Farm.findByIdAndDelete(req.params.id);
    res.redirect('/farms');
}));

// localhost:3000/farms/:id/products/new renders new.ejs, which is in products fodler.  
// This page is to create a new product for a specified farm.  
// Pass in the farm and categories as argument.  
app.get('/farms/:id/products/new', wrapAsync(async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    res.render('products/new', { categories, farm });
}));

// When a form on localhost:3000/farms/:id/products/new is submitted, a POST request will be sent to localhost:3000/farms/:id/products.  
app.post('/farms/:id/products', wrapAsync(async (req, res) => {
    // Retrieve the id from the parameter, and set the farm variable equal to the Farm object found by id.  
    const { id } = req.params;
    const farm = await Farm.findById(id);
    // req.body is the object that I created when I submit the form, retrieve the properties from that object and create a new Product object with it.  
    const { name, price, category } = req.body;
    const product = new Product({ name, price, category });
    // Add the product into the farm's products array.  
    farm.products.push(product);
    // Set the product's farm property equal to farm.  
    product.farm = farm;
    // Update the farm object and create the product object.  
    await farm.save();
    await product.save();
    // Redirect the page to localhost:3000/farms/:id.  
    res.redirect(`/farms/${id}`);
}));


// Product routes. 

// localhost:3000/products will render the template index.ejs from products folder, which is inside views folder.  
app.get('/products', wrapAsync(async (req, res, next) => {
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
}));

// localhost:3000/products/new will render the template new.ejs from products folder, which is inside views folder.  
// I must put this method after get() method for ‘/products’ and before get() method for ‘/products/:id’, or the web app doesn’t run.  Order matters.  
// Pass in categories as the second argument for new.ejs.  
app.get('/products/new', (req, res) => {
    res.render('products/new', { categories });
});

// When the form in new.ejs is submitted, there will be a POST request to localhost:3000/products.  
app.post('/products', wrapAsync(async (req, res, next) => {
    // req.body is the object we made with the form in new.ejs, create a Product object based on the returned object from the submitted form in new.ejs.  
    const newProduct = new Product(req.body);
    // Insert the new object into the products collection.  An ID is automatically generated when the document is inserted into the collection.  
    // Add the await keyword or else I will get an error.  
    await newProduct.save();
    // Redirect to the localhost:3000/products/:id after form on new.ejs is submitted, where id is the id of the newly created object.  
    res.redirect(`/products/${newProduct._id}`);
}));

// localhost:3000/products/:id will render the template show.ejs from products folder, which is inside views folder.  
// Add the next argument to do error handling for an asynchronous function, trigger error handler codes that's near the end.  
// Wrap a get() function around with another function, wrapAsync().  
app.get('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id).populate('farm', 'name');
    res.render('products/show', { product });
}));

// localhost:3000/products/:id/edit will render the template edit.ejs from products folder, which is inside views folder.  
app.get('/products/:id/edit', wrapAsync(async (req, res, next) => {
    // Set the id equals to the parameter.  
    const { id } = req.params;
    // Find the object by its id via findById() method.  
    const product = await Product.findById(id);
    // Pass in categories array to be used in edit.ejs.  
    res.render('products/edit', { product, categories });
}));

// If a form on edit.ejs is submitted, this PUT request to localhost:3000/products/:id will be invoked.  
app.put('/products/:id', wrapAsync(async (req, res, next) => {
    // Set the id equals to the parameter.  
    const { id } = req.params;
    // Find the object by its ID, and update it to the value of the returned object after the form on edit.ejs is submitted.  
    // JavaScript also validates the newly created object with schema to check if each property have a valid value before update.  
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    // Redirect to the localhost:3000/products/:id after form on edit.ejs is submitted, where id is the id of the updated object.
    res.redirect(`/products/${product._id}`);
}));

// If the form on show.ejs is submitted, this DELETE request to localhost:3000/products/:id will be invoked.  
app.delete('/products/:id', wrapAsync(async (req, res) => {
    // Set the id equals to the parameter.  
    const { id } = req.params;
    // Find and delete the object by its ID.  
    const deletedProduct = await Product.findByIdAndDelete(id);
    // Redirect to localhost:3000/products after the form is deleted.  
    res.redirect('/products');
}));

// The handleValidationErr function prints out the error on the console then returns the error.  
const handleValidationErr = err => {
    console.log(err);
    return new AppError(`Validation Failed...  ${err.message}`, 400);
}

// Create another error handling middleware that prints out the error name in console.   
// If error is ValidationError, I invoke the handleValidationErr function.  
// I save the error with err variable and call the next middleware by passing the err object as the argument.  
app.use((err, req, res, next) => {
    console.log(err.name);
    if (err.name === 'ValidationError') {
        err = handleValidationErr(err);
    }
    next(err);
});

// If there's something went wrong, display the error message on the web page.  
// Default error status code is 500, default error message is 'Something went wrong!'.  
app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong!' } = err;
    res.status(status).send(message);
});

// Listen on port 3000.  
app.listen(3000, () => {
    console.log("Listening on port 3000!");
});