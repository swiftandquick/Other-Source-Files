// Require the mongoose package.  
const mongoose = require('mongoose');

// Create a Schema variable, set it equal to the Schema object of mongoose.  
const Schema = mongoose.Schema;

// Connect to the database relationshipDemo.  
mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection open!");
    })
    .catch(error => {
        console.log("Error!");
        console.log(error);
    });

// Create a Schema that represents a product.  
const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
});

// Create a Schema for farms.  
// products is an array of objects with the type of ObjectId.  
// ref references to the name of the model object, in this case, it's Product.  
// products contains an array of Product objects.  
const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});

// Create a model object with productSchema as the schema.  
const Product = mongoose.model('Product', productSchema);

// Create a model object with farmSchema as the schema.  
const Farm = mongoose.model('Farm', farmSchema);

// Create a model object with farmSchema as 

/*
// Insert the objects into the products collection.  
Product.insertMany([
    { name: 'Goddess Melon', price: 4.99, Season: 'Summer' },
    { name: 'Sugar Baby Watermelon', price: 4.99, Season: 'Summer' },
    { name: 'Asparagus', price: 3.99, Season: 'Spring' }
]);
*/

// makeFarm() is an async function that inserts a Farm object into the farms collection.  
const makeFarm = async () => {
    // Create a Farm object with name and city values, but no products value.   
    const farm = new Farm({ name: 'Full Belly Farms', city: 'Guinda, CA', });
    // Find the first object in the products collection where name is 'Goddess Melon'.  
    const melon = await Product.findOne({ name: 'Goddess Melon' });
    // Add the found object from products collection to the products array in farms collection.  
    farm.products.push(melon);
    // Insert the new Farm object into the farms collection.  
    await farm.save();
    console.log(farm);
}

// makeFarm();

// Use addProduct function add an Product object into a Farm object's products array.  
const addProduct = async () => {
    // Find the first Farm object that has the name of 'Full Belly Farms'.  
    const farm = await Farm.findOne({ name: 'Full Belly Farms' });
    // Find the first Product object that has the name of 'Sugar Baby Watermelon'.  
    const watermelon = await Product.findOne({ name: 'Sugar Baby Watermelon' });
    // Add the found Product object in the found Farm object's products array.  
    farm.products.push(watermelon);
    // Since the Farm object already exist, save() updates the object.  
    await farm.save();
    console.log(farm);
}

// addProduct();

// Populate the fields of the products array's objects rather than display the objects' ID.  
Farm.findOne({ name: 'Full Belly Farms' })
    .populate('products')
    .then(farm => console.log(farm));