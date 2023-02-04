// Require mongoose package.  
const mongoose = require('mongoose');

// Destructure Schema.  
const { Schema } = mongoose;

// Require Product model.  
const Product = require('./product');

// Create a schema for farms.  
// products is an array of referenced Product objects.  
const farmSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Farm must have a name.']
    },
    city: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Email required']
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
});

// This post middleware invokes when findOneAndDelete or FindByIdAndDelete is invoked on a Farm object.  
// Once the Farm object is deleted, the Product objects in the products array of the Farm object also will be deleted.  
farmSchema.post('findOneAndDelete', async function (farm) {
    if (farm.products.length) {
        const res = await Product.deleteMany({ _id: { $in: farm.products } });
        console.log(res);
    }
});

// Create a model based on farmSchema.    
const Farm = mongoose.model('Farm', farmSchema);

// Export the Farm variable (a model object) file as a module.  
module.exports = Farm;