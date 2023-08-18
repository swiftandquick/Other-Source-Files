import { useState } from "react";

// productIsValid (piece of state) is initially false.  
// If productIsValid is false, red text will be rendered to tell the user to enter the correct information.  
// When the form changes, handleChange will be invoked, and when handleChange is invoked, validate will be invoked.  
// When validate is invoked, if product is an empty string, set productIsValid to false, otherwise, setProductIsValid to true.  
// Only change formData's value if productIsValid is true after handleChange is invoked.  
// The Add Item form submission button is disabled when productIsValid is false.  
function ValidatedShoppingListForm({addItem}) {
    const [formData, setFormData] = useState({product: "", quantity: 0});
    const [productIsValid, setProductIsValid] = useState(false);
    const validate = (product) => {
        if(product.length === 0) {
            setProductIsValid(false);
        }
        else {
            setProductIsValid(true);
        }
    }
    const handleChange = (e) => {
        if (e.target.name === "product") {
            validate(e.target.value);
        }
        if (productIsValid) {
            setFormData(currData => {
                return { ...currData, [e.target.name]: e.target.value }; 
            });
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(formData);
        setFormData({ product: "", quantity: 0 });
    };
    return (
        <form onSubmit={handleSubmit}>
            <h1>Product is {formData.product} and quantity is {formData.quantity}. </h1>
            <label htmlFor="product">Product Name:  </label>
            <input type="text" placeholder="product name" name="product" id="product" 
                onChange={handleChange} value={formData.product} />
            { !productIsValid && <p style={{color:'red'}}>Product name cannot be empty</p> }
            <label htmlFor="quantity">Quantity:  </label>
            <input type="number" placeholder="quantity" name="quantity" id="quantity" 
                onChange={handleChange} value={formData.quantity} />
            <button disabled={!productIsValid}>Add Item</button>
        </form>
    );
}

export default ValidatedShoppingListForm;