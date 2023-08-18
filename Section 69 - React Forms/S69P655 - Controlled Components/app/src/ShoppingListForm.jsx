import { useState } from "react";

// The h1 element re-renders the input element whenever the input element changes.  
// addItem is a prop from ShoppingList, which is a function that adds an object to the array.  
// When the form is submitted, handleSubmit function will be invoked.  
// When the form is submitted, invoke preventDefault() first to prevent the page from reloading, 
// then invoke addItem with the object formData (also a piece of state) as argument, that adds an object to the array in ShoppingList component, 
// lastly, reset the formData back to its original value.  
function ShoppingListForm({addItem}) {
    const [formData, setFormData] = useState({product: "", quantity: 0});
    const handleChange = (e) => {
        setFormData(currData => {
            return { ...currData, [e.target.name]: e.target.value }; 
        });
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
            <label htmlFor="quantity">Quantity:  </label>
            <input type="number" placeholder="quantity" name="quantity" id="quantity" 
                onChange={handleChange} value={formData.quantity} />
            <button>Add Item</button>
        </form>
    );
}

export default ShoppingListForm;