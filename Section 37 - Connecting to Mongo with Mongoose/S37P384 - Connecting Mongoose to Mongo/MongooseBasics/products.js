/* Try to comment out all codes when I load the file so I don't add or update the database.  
Only un-comment the codes when I need to insert or update.    
*/

// Require the mongoose package.  
const mongoose = require('mongoose');

// Connect to the database shopApp.  
mongoose.connect('mongodb://127.0.0.1:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection open!");
    })
    .catch(error => {
        console.log("Error!");
        console.log(error);
    });

// Define a Schema for the product.  
// required:  Default value is false, if set to true, the object is required to have a value for that property.  
// I must have values for name and price.  
// default:  Set the default value for an object in case the value is not present.  
// min:  The number of the property must be greater than or equal to min.  
// price's number value must be greater than or equal to 0, if it's not, error message contains 'Price must be positive!'.  
// maxlength:  Takes number as value, the string’s size can be greater than maxlength.  
// name cannot have more than 20 characters.  
// qty is a property that contains two properties, online and inStore both are number type and default values are 0.  
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive!']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
});

// Create a greet() instance method for the Schema productSchema that prints "Hello!" and the name's value of the object on the console.  
// Since the class Product is connected to productSchema, any objects created using the class Product can invoke the greet() method.  
productSchema.methods.greet = function () {
    console.log("Hello!");
    console.log(`${this.name}`);
}

// Change the current object's onSale value to the opposite of what it currently is.  
// this keyword refers to the object used to invoke the toggleOnSale() method, in this case, it's foundProduct.  
productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();
}

// Adds a new String at the end of the categories array for an object.  
productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save();
}

// Add a static method to the model.  
// Update all Product objects' onSale value to true and price value to 0.  
productSchema.statics.fireSale = function () {
    return this.updateMany({}, { onSale: true, price: 0 });
}

// Create a model class called Product, save it to a variable.  
const Product = mongoose.model('Product', productSchema);

// Wait for the console to find the object with name of 'Mountain Bike'.  
// The findOne() method returns the first object found with the name 'Mountain Bike'. 
// Use foundProduct to invoke toggleOnSale(). 
// foundProduct can invoke toggleOnSale() because foundProduct is a Product type object, and Product is connected to productSchema.  
// Use foundProduct to invoke addCategory, pass the String ‘Outdoors’ argument, then addCategory() takes ‘Outdoors’ as the newCat variable, 
// use the push() method to add ‘Outdoors’ element at the end of the categories array.  
const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Mountain Bike' });
    console.log(foundProduct); // Prints out object's value pre-update.  
    await foundProduct.toggleOnSale();
    console.log(foundProduct); // Prints out object's value post-update.  
    await foundProduct.addCategory('Outdoors');
    console.log(foundProduct); // Prints out object's value after the second update.  
}

/*
// Since fireSale() is a static method on the model, I use the model Product to invoke fireSale().
Product.fireSale()
    .then(res => console.log(res))
    .catch(err => console.log(err));
*/

// findProduct();

/*
const bike = new Product({ name: 'Cycling Jersey', price: 28.50, categories: ['Cycling'], size: 'XS' });
bike.save()
    .then(data => {
        console.log("Data added!");
        console.log(data);
    })
    .catch(error => {
        console.log("Error!");
        console.log(error);
    });
*/

/*
Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: -9 }, { new: true, runValidators: true })
    .then(data => {
        console.log("Data added!");
        console.log(data);
    })
    .catch(error => {
        console.log("Error!");
        console.log(error);
    });
*/